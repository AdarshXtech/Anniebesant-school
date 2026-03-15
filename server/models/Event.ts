import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  eventTitle: { type: String, required: true },
  eventDescription: { type: String, required: true },
  eventDate: { type: Date, required: true },
  images: [{ type: String }],
}, { timestamps: true });

export const Event = mongoose.model('Event', eventSchema);
