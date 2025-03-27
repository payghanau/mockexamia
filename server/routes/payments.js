
const express = require('express');
const crypto = require('crypto');
const UserExam = require('../models/UserExam');
const Exam = require('../models/Exam');
const { auth } = require('../middleware/auth');
const razorpayInstance = require('../config/razorpay');

const router = express.Router();

// Create a new payment order
router.post('/create-order', auth, async (req, res) => {
  try {
    const { examId } = req.body;
    
    // Find the exam to get the fee
    const exam = await Exam.findById(examId);
    
    if (!exam) {
      return res.status(404).json({ message: 'Exam not found' });
    }
    
    // Find user exam
    const userExam = await UserExam.findOne({
      userId: req.user._id,
      examId,
      status: { $in: ['pending', 'in-progress'] },
      paymentStatus: 'pending'
    });
    
    if (!userExam) {
      return res.status(404).json({ 
        message: 'Exam not found or payment already completed' 
      });
    }
    
    // Create Razorpay order
    const options = {
      amount: exam.fee * 100, // Amount in smallest currency unit (paise for INR)
      currency: 'INR',
      receipt: `receipt_${userExam._id}`,
      notes: {
        examId: examId,
        userExamId: userExam._id.toString(),
        userId: req.user._id.toString()
      }
    };
    
    const order = await razorpayInstance.orders.create(options);
    
    // Save order ID to userExam
    userExam.paymentId = order.id;
    await userExam.save();
    
    res.json({
      success: true,
      order,
      key_id: process.env.RAZORPAY_KEY_ID
    });
  } catch (error) {
    console.error('Payment order creation error:', error);
    res.status(500).json({ 
      message: 'Server error', 
      error: error.message 
    });
  }
});

// Verify payment signature and update payment status
router.post('/verify', auth, async (req, res) => {
  try {
    const { 
      razorpay_order_id, 
      razorpay_payment_id, 
      razorpay_signature 
    } = req.body;
    
    // Verify signature
    const body = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(body)
      .digest("hex");
    
    const isSignatureValid = expectedSignature === razorpay_signature;
    
    if (!isSignatureValid) {
      return res.status(400).json({ 
        success: false, 
        message: 'Payment verification failed' 
      });
    }
    
    // Find the userExam by payment ID (order ID)
    const userExam = await UserExam.findOne({ 
      paymentId: razorpay_order_id,
      paymentStatus: 'pending'
    });
    
    if (!userExam) {
      return res.status(404).json({ 
        success: false, 
        message: 'Exam not found or payment already processed' 
      });
    }
    
    // Update payment status
    userExam.paymentStatus = 'completed';
    userExam.paymentId = razorpay_payment_id; // Update to payment ID
    
    await userExam.save();
    
    res.json({
      success: true,
      message: 'Payment verified successfully',
      userExam
    });
  } catch (error) {
    console.error('Payment verification error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error', 
      error: error.message 
    });
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
