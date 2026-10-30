require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const userRoutes = require('./routes/userRoute');
const apiRoutes = require('./routes/apiRoute');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware CORS agar frontend React dapat mengakses API
app.use(cors());

// Middleware JSON & Form URL Encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('json spaces', 2);

// Uploads Static Directory
const uploadsDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Serve Static Files for /uploads with fallback
app.use('/uploads', (req, res, next) => {
  const filePath = path.join(uploadsDir, req.path);
  if (fs.existsSync(filePath)) {
    return res.sendFile(filePath);
  }
  
  // Jika file foto tidak ditemukan, fallback ke avatar default
  const defaultAvatar = path.join(uploadsDir, 'avatar_default.png');
  if (fs.existsSync(defaultAvatar)) {
    return res.sendFile(defaultAvatar);
  }
  
  // Jika file dokumen pdf tidak ditemukan, fallback ke cv_sample.pdf
  const defaultPdf = path.join(uploadsDir, 'cv_sample.pdf');
  if (fs.existsSync(defaultPdf)) {
    return res.sendFile(defaultPdf);
  }

  next();
});

// Route Utama (Root)
app.get('/', (req, res) => {
  res.json({
    status: 'success',
    message: 'Backend Prajagamer Disdukcapil API berjalan dengan baik',
    endpoints: {
      api: '/api',
      users: '/users',
      uploads: '/uploads'
    }
  });
});

// Rute API Prajagamer
app.use('/api', apiRoutes);

// Rute Legacy User
app.use('/users', userRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`[Prajagamer Backend] Server running on http://localhost:${PORT}`);
});
