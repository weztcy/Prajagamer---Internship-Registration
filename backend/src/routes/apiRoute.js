const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const authController = require('../controllers/authController');
const internshipController = require('../controllers/internshipController');
const bannerController = require('../controllers/bannerController');

// Konfigurasi Multer untuk penyimpanan file di uploads/
const uploadsDir = path.join(__dirname, '../../uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  }
});

const upload = multer({ storage });

// Autentikasi Pengguna & Admin
router.post('/user/login', authController.userLogin);
router.post(
  '/user/register',
  upload.fields([
    { name: 'photo', maxCount: 1 },
    { name: 'cv', maxCount: 1 },
    { name: 'score_list', maxCount: 1 },
  ]),
  authController.userRegister
);

router.post('/admin/login', authController.adminLogin);
router.get('/admins', authController.getAdmins);
router.post('/admin/register', authController.registerAdmin);
router.delete('/admin/:id', authController.deleteAdmin);

// Dashboard Admin & Manajemen Pelamar
router.get('/admin/dashboard', internshipController.getDashboard);
router.get('/users', internshipController.getAllUsers);
router.put('/users/status', internshipController.updateUserStatus);
router.get('/users2', internshipController.getAllApplicants);
router.put('/users/status2', internshipController.updateUserStatus);

// Profil Pengguna
router.get('/profile', internshipController.getProfile);
router.post('/profile', upload.single('photo'), internshipController.updateProfile);

// Pendaftaran Magang
router.get('/internship-form', internshipController.getInternshipForm);
router.post(
  '/apply-internship',
  upload.fields([
    { name: 'recommend_letter', maxCount: 1 },
    { name: 'portofolio', maxCount: 1 },
    { name: 'cv', maxCount: 1 },
  ]),
  internshipController.applyInternship
);

// Banner Informasi Lowongan
router.get('/banner', bannerController.getBanner);
router.put('/banner', upload.single('banner'), bannerController.updateBanner);
router.post('/banner', upload.single('banner'), bannerController.updateBanner);

module.exports = router;

