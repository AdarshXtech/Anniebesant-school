import mongoose from 'mongoose';

const parentPortalSchema = new mongoose.Schema({
  studentId: { type: String, required: true, unique: true },
  attendance: { type: Number, default: 0 },
  homework: [{ title: String, description: String, dueDate: Date }],
  results: [{ subject: String, marks: Number, maxMarks: Number }],
  feesPaid: { type: Boolean, default: false },
}, { timestamps: true });

export const ParentPortal = mongoose.model('ParentPortal', parentPortalSchema);
