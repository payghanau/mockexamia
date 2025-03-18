
const express = require('express');
const Exam = require('../models/Exam');
const Question = require('../models/Question');
const { auth, adminAuth } = require('../middleware/auth');

const router = express.Router();

// Get all exams
router.get('/', async (req, res) => {
  try {
    const { category, type } = req.query;
    let query = { isActive: true };
    
    if (category) query.category = category;
    if (type) query.type = type;
    
    const exams = await Exam.find(query).select('-questions');
    res.json(exams);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get exam by ID
router.get('/:id', auth, async (req, res) => {
  try {
    const exam = await Exam.findById(req.params.id);
    
    if (!exam) {
      return res.status(404).json({ message: 'Exam not found' });
    }
    
    res.json(exam);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get exam questions
router.get('/:id/questions', auth, async (req, res) => {
  try {
    const exam = await Exam.findById(req.params.id)
      .populate('questions');
    
    if (!exam) {
      return res.status(404).json({ message: 'Exam not found' });
    }
    
    res.json(exam.questions);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Create a new exam (admin only)
router.post('/', adminAuth, async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      subcategory,
      type,
      duration,
      totalQuestions,
      fee,
      questions
    } = req.body;
    
    // Create new exam
    const exam = new Exam({
      title,
      description,
      category,
      subcategory,
      type,
      duration,
      totalQuestions,
      fee,
      createdBy: req.user._id
    });
    
    await exam.save();
    
    // Add questions if provided
    if (questions && questions.length > 0) {
      const questionDocs = questions.map(q => ({
        ...q,
        examId: exam._id
      }));
      
      const savedQuestions = await Question.insertMany(questionDocs);
      
      // Add question IDs to exam
      exam.questions = savedQuestions.map(q => q._id);
      await exam.save();
    }
    
    res.status(201).json(exam);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Update an exam (admin only)
router.put('/:id', adminAuth, async (req, res) => {
  try {
    const exam = await Exam.findById(req.params.id);
    
    if (!exam) {
      return res.status(404).json({ message: 'Exam not found' });
    }
    
    const updatedExam = await Exam.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    
    res.json(updatedExam);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Delete an exam (admin only)
router.delete('/:id', adminAuth, async (req, res) => {
  try {
    const exam = await Exam.findById(req.params.id);
    
    if (!exam) {
      return res.status(404).json({ message: 'Exam not found' });
    }
    
    // Delete associated questions
    await Question.deleteMany({ examId: exam._id });
    
    // Delete the exam
    await Exam.findByIdAndDelete(req.params.id);
    
    res.json({ message: 'Exam deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Add questions to an exam (admin only)
router.post('/:id/questions', adminAuth, async (req, res) => {
  try {
    const exam = await Exam.findById(req.params.id);
    
    if (!exam) {
      return res.status(404).json({ message: 'Exam not found' });
    }
    
    const questions = req.body.questions.map(q => ({
      ...q,
      examId: exam._id
    }));
    
    const savedQuestions = await Question.insertMany(questions);
    
    // Add question IDs to exam
    exam.questions = [...exam.questions, ...savedQuestions.map(q => q._id)];
    await exam.save();
    
    res.status(201).json(savedQuestions);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
