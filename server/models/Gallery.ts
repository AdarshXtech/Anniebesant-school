import mongoose from 'mongoose';

const gallerySchema = new mongoose.Schema({
  category: { type: String, required: true, enum: ['Campus', 'Events', 'Sports', 'Cultural activities', 'Achievements'] },
  imageUrl: { type: String, required: true },
  uploadDate: { type: Date, default: Date.now },
}, { timestamps: true });

export const Gallery = mongoose.model('Gallery', gallerySchema);
