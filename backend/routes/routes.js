import express from 'express';
import upload from '../services/multer.config.js';
import path from 'path';
import fs from 'fs/promises';

const router = express.Router();

router.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  const imageUrl = `http://localhost:3000/uploads/${req.file.filename}`;
  res.json({ url: imageUrl });
});

router.get('/images', async (req, res) => {
  try {
    const uploadDir = path.join(process.cwd(), 'uploads');
    const files = await fs.readdir(uploadDir);
    const fileInfos = files.map(file => ({
      name: file,
      url: `http://localhost:3000/uploads/${file}`,
    }));
    res.json(fileInfos);
  } catch (err) {
    res.status(500).send('Error reading upload directory');
  }
});

export default router;

