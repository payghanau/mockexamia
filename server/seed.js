
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');
const Exam = require('./models/Exam');
const Question = require('./models/Question');

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

const seedData = async () => {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Exam.deleteMany({});
    await Question.deleteMany({});
    
    // Create admin user
    const admin = new User({
      email: 'admin@myturnindia.com',
      password: 'admin123',
      name: 'Admin User',
      role: 'admin'
    });
    
    await admin.save();
    console.log('Admin user created');
    
    // Create sample exams
    const nismExam = new Exam({
      title: 'NISM Series V-A: Mutual Fund Distributors',
      description: 'Chapter 1-3: Introduction to Mutual Funds',
      category: 'NISM',
      type: 'chapter-wise',
      duration: 12,
      totalQuestions: 10,
      fee: 199,
      createdBy: admin._id,
      isActive: true
    });
    
    const gateExam = new Exam({
      title: 'GATE Computer Science - Section Test',
      description: 'Data Structures & Algorithms',
      category: 'GATE',
      subcategory: 'Computer Science',
      type: 'section-wise',
      duration: 20,
      totalQuestions: 10,
      fee: 299,
      createdBy: admin._id,
      isActive: true
    });
    
    const savedNismExam = await nismExam.save();
    const savedGateExam = await gateExam.save();
    
    console.log('Sample exams created');
    
    // Create sample questions for NISM exam
    const nismQuestions = [];
    
    for (let i = 0; i < 10; i++) {
      const isSingle = i % 3 !== 0;
      const question = new Question({
        text: `Sample question ${i+1} for NISM exam. This is a ${isSingle ? 'single' : 'multiple'} choice question.`,
        options: [
          `Option A for question ${i+1}`,
          `Option B for question ${i+1}`,
          `Option C for question ${i+1}`,
          `Option D for question ${i+1}`
        ],
        correctAnswers: isSingle ? [i % 4] : [0, 2],
        type: isSingle ? 'single' : 'multiple',
        marks: i % 5 === 0 ? 2 : 1,
        negativeMarks: 0.25,
        examId: savedNismExam._id
      });
      
      nismQuestions.push(question);
    }
    
    const savedNismQuestions = await Question.insertMany(nismQuestions);
    
    // Update NISM exam with question IDs
    savedNismExam.questions = savedNismQuestions.map(q => q._id);
    await savedNismExam.save();
    
    // Create sample questions for GATE exam
    const gateQuestions = [];
    
    for (let i = 0; i < 10; i++) {
      const isSingle = i % 3 !== 0;
      const question = new Question({
        text: `Sample question ${i+1} for GATE exam. This is a ${isSingle ? 'single' : 'multiple'} choice question.`,
        options: [
          `Option A for question ${i+1}`,
          `Option B for question ${i+1}`,
          `Option C for question ${i+1}`,
          `Option D for question ${i+1}`
        ],
        correctAnswers: isSingle ? [i % 4] : [0, 2],
        type: isSingle ? 'single' : 'multiple',
        marks: i % 5 === 0 ? 2 : 1,
        negativeMarks: 0.25,
        examId: savedGateExam._id
      });
      
      gateQuestions.push(question);
    }
    
    const savedGateQuestions = await Question.insertMany(gateQuestions);
    
    // Update GATE exam with question IDs
    savedGateExam.questions = savedGateQuestions.map(q => q._id);
    await savedGateExam.save();
    
    console.log('Sample questions created');
    console.log('Database seeded successfully');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedData();
