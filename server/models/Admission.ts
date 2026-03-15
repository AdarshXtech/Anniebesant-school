import mongoose from 'mongoose';

const admissionSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  classApplying: { type: String, required: true },
  parentName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  documents: [{ type: String }],
  status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
}, { timestamps: true });

export const Admission = mongoose.model('Admission', admissionSchema);
