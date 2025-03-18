
const express = require('express');
const UserExam = require('../models/UserExam');
const Exam = require('../models/Exam');
const Question = require('../models/Question');
const { auth } = require('../middleware/auth');

const router = express.Router();

// Get all user exams
router.get('/', auth, async (req, res) => {
  try {
    const userExams = await UserExam.find({ userId: req.user._id })
      .populate('examId', 'title category type duration');
    
    res.json(userExams);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get user exam by ID
router.get('/:id', auth, async (req, res) => {
  try {
    const userExam = await UserExam.findById(req.params.id)
      .populate('examId')
      .populate('answers.questionId');
    
    if (!userExam) {
      return res.status(404).json({ message: 'Result not found' });
    }
    
    if (userExam.userId.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized' });
    }
    
    res.json(userExam);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Start an exam
router.post('/start', auth, async (req, res) => {
  try {
    const { examId } = req.body;
    
    const exam = await Exam.findById(examId);
    
    if (!exam) {
      return res.status(404).json({ message: 'Exam not found' });
    }
    
    // Check if user has already started this exam
    const existingExam = await UserExam.findOne({
      userId: req.user._id,
      examId,
      status: { $in: ['pending', 'in-progress'] }
    });
    
    if (existingExam) {
      return res.json(existingExam);
    }
    
    // Create new user exam
    const userExam = new UserExam({
      userId: req.user._id,
      examId,
      startTime: new Date(),
      status: 'in-progress',
      answers: [],
      paymentStatus: exam.fee > 0 ? 'pending' : 'completed'
    });
    
    await userExam.save();
    
    res.status(201).json(userExam);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Submit exam answers
router.post('/:id/submit', auth, async (req, res) => {
  try {
    const userExam = await UserExam.findById(req.params.id);
    
    if (!userExam) {
      return res.status(404).json({ message: 'Exam attempt not found' });
    }
    
    if (userExam.userId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized' });
    }
    
    if (userExam.status === 'completed') {
      return res.status(400).json({ message: 'Exam already submitted' });
    }
    
    const { answers } = req.body;
    const exam = await Exam.findById(userExam.examId);
    const questions = await Question.find({ examId: userExam.examId });
    
    // Calculate score
    let totalScore = 0;
    
    const processedAnswers = answers.map(answer => {
      const question = questions.find(q => q._id.toString() === answer.questionId);
      
      if (!question) return null;
      
      const selectedOptions = answer.selectedOptions || [];
      const isCorrect = 
        selectedOptions.length === question.correctAnswers.length &&
        question.correctAnswers.every(opt => selectedOptions.includes(opt));
      
      const marksObtained = isCorrect
        ? question.marks
        : selectedOptions.length > 0
          ? -question.negativeMarks
          : 0;
          
      totalScore += marksObtained;
      
      return {
        questionId: question._id,
        selectedOptions,
        isCorrect,
        marksObtained
      };
    }).filter(a => a !== null);
    
    // Update user exam
    userExam.answers = processedAnswers;
    userExam.score = totalScore;
    userExam.status = 'completed';
    userExam.endTime = new Date();
    
    await userExam.save();
    
    res.json(userExam);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get exam analysis
router.get('/:id/analysis', auth, async (req, res) => {
  try {
    const userExam = await UserExam.findById(req.params.id)
      .populate('examId')
      .populate('answers.questionId');
    
    if (!userExam) {
      return res.status(404).json({ message: 'Result not found' });
    }
    
    if (userExam.userId.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized' });
    }
    
    const totalQuestions = userExam.examId.totalQuestions;
    const attempted = userExam.answers.length;
    const correct = userExam.answers.filter(a => a.isCorrect).length;
    const incorrect = userExam.answers.filter(a => !a.isCorrect && a.selectedOptions.length > 0).length;
    const skipped = totalQuestions - attempted;
    
    const totalMarks = userExam.answers.reduce((total, answer) => {
      if (answer.questionId) {
        return total + answer.questionId.marks;
      }
      return total;
    }, 0);
    
    const obtainedMarks = userExam.score;
    const percentageScore = (obtainedMarks / totalMarks) * 100;
    
    // Calculate time taken in seconds
    const startTime = new Date(userExam.startTime).getTime();
    const endTime = userExam.endTime ? new Date(userExam.endTime).getTime() : Date.now();
    const timeTaken = Math.floor((endTime - startTime) / 1000);
    
    const accuracy = attempted > 0 ? (correct / attempted) * 100 : 0;
    
    const analysis = {
      totalQuestions,
      attempted,
      correct,
      incorrect,
      skipped,
      totalMarks,
      obtainedMarks,
      percentageScore,
      timeTaken,
      accuracy
    };
    
    res.json(analysis);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
