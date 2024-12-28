const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Define schema for individual subjects and their marks
const subjectSchema = new Schema({
  name: {
    type: String,
    required: true, // Subject name is mandatory
  },
  practical: {
    type: Number,
    required: true,
    min: 0, // Ensure marks are non-negative
  },
  written: {
    type: Number,
    required: true,
    min: 0, // Ensure marks are non-negative
  },
  total: {
    type: Number,
    required: true,
    min: 0, // Total marks are the sum of practical and written
  },
});

// Define schema for marks, referencing the Student model
const marksSchema = new Schema(
  {
    registrationNumber: {
      type: String,
      required: true,
    },
    marksData: [subjectSchema], // Array of subjects with marks
    totalPractical: {
      type: Number,
      default: 0, // Sum of all practical marks
    },
    totalWritten: {
      type: Number,
      default: 0, // Sum of all written marks
    },
    totalMarks: {
      type: Number,
      default: 0, // Sum of all total marks
    },
    percentage: {
      type: Number,
      default: 0, // Percentage calculation
    },
    grade: {
      type: String,
      default: "", // Grade based on percentage
    },
    status: {
      type: String,
      default: "", // Pass or Fail based on percentage
    },
  },
  {
    timestamps: true, // Add createdAt and updatedAt timestamps
  }
);

// Pre-save middleware to calculate total marks for practical, written, and overall
marksSchema.pre('save', function (next) {
  this.totalPractical = this.marksData.reduce(
    (sum, subject) => sum + subject.practical,
    0
  );
  this.totalWritten = this.marksData.reduce(
    (sum, subject) => sum + subject.written,
    0
  );
  this.totalMarks = this.marksData.reduce(
    (sum, subject) => sum + subject.total,
    0
  );

  // Calculate percentage
  const totalPossibleMarks = this.marksData.length * 100; // Assuming each subject has a maximum of 100 marks
  this.percentage = (this.totalMarks / totalPossibleMarks) * 100;

  // Assign grade based on percentage
  if (this.percentage >= 90) {
    this.grade = 'A+';
  } else if (this.percentage >= 80) {
    this.grade = 'A';
  } else if (this.percentage >= 70) {
    this.grade = 'B+';
  } else if (this.percentage >= 60) {
    this.grade = 'B';
  } else if (this.percentage >= 50) {
    this.grade = 'C+';
  } else if (this.percentage >= 40) {
    this.grade = 'C';
  } else {
    this.grade = 'F';
  }

  // Determine pass/fail based on percentage or total marks
  this.status = this.percentage >= 40 ? 'Pass' : 'Fail';

  next();
});

// Create and export the Marks model
const Marks = mongoose.model('Marks', marksSchema);
module.exports = Marks;
