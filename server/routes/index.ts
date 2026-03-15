import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';
import { Admission } from '../models/Admission.js';
import { Notice } from '../models/Notice.js';
import { Event } from '../models/Event.js';
import { Gallery } from '../models/Gallery.js';
import { ParentPortal } from '../models/ParentPortal.js';

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

// Middleware to verify token
export const authenticate = (req: any, res: any, next: any) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ message: 'Access denied' });
  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token' });
  }
};

// Middleware to check admin role
const isAdmin = (req: any, res: any, next: any) => {
  if (req.user?.role !== 'admin') return res.status(403).json({ message: 'Admin access required' });
  next();
};

// --- Auth Routes ---
router.post('/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'Invalid credentials' });
    
    // In a real app, use bcrypt.compare. For demo, we might just compare strings if not hashed.
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
    
    const token = jwt.sign({ id: user._id, role: user.role, studentId: user.studentId }, JWT_SECRET, { expiresIn: '1d' });
    res.json({ token, role: user.role, studentId: user.studentId });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// --- Admission Routes ---
router.post('/admissions', async (req, res) => {
  try {
    const admission = new Admission(req.body);
    await admission.save();
    res.status(201).json(admission);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/admissions', authenticate, isAdmin, async (req, res) => {
  try {
    const admissions = await Admission.find().sort({ createdAt: -1 });
    res.json(admissions);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

router.put('/admissions/:id/status', authenticate, isAdmin, async (req, res) => {
  try {
    const admission = await Admission.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    res.json(admission);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

// --- Notice Routes ---
router.get('/notices', async (req, res) => {
  try {
    const notices = await Notice.find().sort({ date: -1 });
    res.json(notices);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/notices', authenticate, isAdmin, async (req, res) => {
  try {
    const notice = new Notice(req.body);
    await notice.save();
    res.status(201).json(notice);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

router.delete('/notices/:id', authenticate, isAdmin, async (req, res) => {
  try {
    await Notice.findByIdAndDelete(req.params.id);
    res.json({ message: 'Notice deleted' });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// --- Event Routes ---
router.get('/events', async (req, res) => {
  try {
    const events = await Event.find().sort({ eventDate: -1 });
    res.json(events);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/events', authenticate, isAdmin, async (req, res) => {
  try {
    const event = new Event(req.body);
    await event.save();
    res.status(201).json(event);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

// --- Gallery Routes ---
router.get('/gallery', async (req, res) => {
  try {
    const gallery = await Gallery.find().sort({ uploadDate: -1 });
    res.json(gallery);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/gallery', authenticate, isAdmin, async (req, res) => {
  try {
    const item = new Gallery(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

// --- Parent Portal Routes ---
router.get('/parent/dashboard', authenticate, async (req: any, res: any) => {
  try {
    if (req.user.role !== 'parent') return res.status(403).json({ message: 'Parent access required' });
    const data = await ParentPortal.findOne({ studentId: req.user.studentId });
    res.json(data || {});
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// --- Admin Dashboard Stats ---
router.get('/admin/stats', authenticate, isAdmin, async (req, res) => {
  try {
    const totalAdmissions = await Admission.countDocuments();
    const pendingAdmissions = await Admission.countDocuments({ status: 'Pending' });
    const totalNotices = await Notice.countDocuments();
    res.json({ totalAdmissions, pendingAdmissions, totalNotices });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
