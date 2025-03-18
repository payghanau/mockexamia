
const express = require('express');
const UserExam = require('../models/UserExam');
const { auth } = require('../middleware/auth');

const router = express.Router();

// Process payment (in a real app, this would integrate with a payment gateway)
router.post('/process', auth, async (req, res) => {
  try {
    const { examId, paymentMethod } = req.body;
    
    // Find user exam
    const userExam = await UserExam.findOne({
      userId: req.user._id,
      examId,
      status: { $in: ['pending', 'in-progress'] },
      paymentStatus: 'pending'
    });
    
    if (!userExam) {
      return res.status(404).json({ message: 'Exam not found or payment already completed' });
    }
    
    // In a real app, you would process payment through a gateway like Stripe
    // For now, we'll simulate a successful payment
    
    // Update payment status
    userExam.paymentStatus = 'completed';
    userExam.paymentId = `payment_${Date.now()}`;
    
    await userExam.save();
    
    res.json({
      success: true,
      message: 'Payment processed successfully',
      userExam
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get payment status
router.get('/:examId/status', auth, async (req, res) => {
  try {
    const userExam = await UserExam.findOne({
      userId: req.user._id,
      examId: req.params.examId
    });
    
    if (!userExam) {
      return res.status(404).json({ message: 'Exam not found' });
    }
    
    res.json({
      paymentStatus: userExam.paymentStatus,
      paymentId: userExam.paymentId
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
