const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Login Pengguna (User / Mahasiswa)
const userLogin = async (req, res) => {
  try {
    const { nik, password } = req.body;
    if (!nik || !password) {
      return res.status(400).json({ message: 'NIK dan password wajib diisi' });
    }

    const profile = await prisma.profile.findFirst({
      where: { nik: String(nik).trim() },
      include: { user: true }
    });

    if (!profile || !profile.user) {
      return res.status(401).json({ message: 'NIK atau password salah.' });
    }

    if (profile.user.password !== password) {
      return res.status(401).json({ message: 'NIK atau password salah.' });
    }

    const token = `user-token-${profile.user.id}-${Date.now()}`;
    return res.status(200).json({
      message: 'Login Berhasil',
      token,
      user: {
        id: profile.user.id,
        name: profile.user.name,
        email: profile.user.email,
        nik: profile.nik,
        status: profile.user.status,
      }
    });
  } catch (error) {
    console.error('Error user login:', error);
    return res.status(500).json({ message: 'Terjadi kesalahan server.', error });
  }
};

// Registrasi Pengguna Baru
const userRegister = async (req, res) => {
  try {
    const { name, nim, nik, password, email, telp, universitas, major } = req.body;
    
    if (!name || !nik || !email || !password) {
      return res.status(400).json({ message: 'Data wajib belum lengkap' });
    }

    const existingUser = await prisma.user.findUnique({
      where: { email }
    });
    if (existingUser) {
      return res.status(400).json({ message: 'Email sudah terdaftar' });
    }

    const existingNik = await prisma.profile.findUnique({
      where: { nik: String(nik).trim() }
    });
    if (existingNik) {
      return res.status(400).json({ message: 'NIK sudah terdaftar' });
    }

    const photoFile = req.files && req.files.photo ? req.files.photo[0].filename : 'sample1.jpg';
    const cvFile = req.files && req.files.cv ? req.files.cv[0].filename : 'cv_sample.pdf';
    const scoreFile = req.files && req.files.score_list ? req.files.score_list[0].filename : 'transkrip_sample.pdf';

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password,
        status: 'Verifying',
        Profile: {
          create: {
            nik: String(nik).trim(),
            telp_user: telp || '',
            photo: photoFile,
            city_ktp: 'Kota Semarang',
            province_ktp: 'Jawa Tengah',
            city_domicile: 'Kota Semarang',
            province_domicile: 'Jawa Tengah',
            strata: 'S1',
            ipk: '3.75',
            semester: '6',
          }
        },
        University: {
          create: {
            nim: nim || '',
            univ_name: universitas || '',
            major: major || '',
          }
        },
        Regist: {
          create: {
            available_space: true,
            cv: cvFile,
            score_list: scoreFile,
            recommend_letter: 'rekomendasi_sample.pdf',
            portofolio: 'portofolio_sample.pdf',
            first_period: '2026-11-01',
            last_period: '2027-02-01',
          }
        }
      },
      include: {
        Profile: true,
        University: true,
        Regist: true,
      }
    });

    return res.status(201).json({
      message: 'Registrasi berhasil!',
      user: newUser,
    });
  } catch (error) {
    console.error('Error user register:', error);
    return res.status(500).json({ message: 'Gagal melakukan registrasi', error });
  }
};

// Login Admin
const adminLogin = async (req, res) => {
  try {
    const { nip, password } = req.body;
    if (!nip || !password) {
      return res.status(400).json({ message: 'NIP dan password wajib diisi' });
    }

    const admin = await prisma.admin.findUnique({
      where: { nip: String(nip).trim() }
    });

    if (!admin || admin.password !== password) {
      return res.status(401).json({ message: 'NIP atau password admin salah' });
    }

    const token = `admin-token-${admin.id}-${Date.now()}`;
    return res.status(200).json({
      message: 'Login Berhasil',
      token,
      admin: {
        id: admin.id,
        name: admin.admin_name,
        nip: admin.nip,
        email: admin.email,
      }
    });
  } catch (error) {
    console.error('Error admin login:', error);
    return res.status(500).json({ message: 'Terjadi kesalahan server.', error });
  }
};

// Ambil data admin / detail admin
const getAdmins = async (req, res) => {
  try {
    const { nip } = req.query;
    if (nip) {
      const admin = await prisma.admin.findUnique({
        where: { nip: String(nip).trim() }
      });
      if (!admin) {
        return res.status(404).json({ message: 'Admin tidak ditemukan' });
      }
      return res.status(200).json({
        ...admin,
        adminName: admin.admin_name,
        name: admin.admin_name,
      });
    }

    const admins = await prisma.admin.findMany({
      orderBy: { id: 'desc' }
    });
    return res.status(200).json(admins);
  } catch (error) {
    console.error('Error get admins:', error);
    return res.status(500).json({ message: 'Gagal mengambil data admin', error });
  }
};

// Tambah Admin baru
const registerAdmin = async (req, res) => {
  try {
    const { admin_name, nip, telp_admin, email, password } = req.body;
    if (!admin_name || !nip || !email || !password) {
      return res.status(400).json({ message: 'Semua kolom wajib diisi' });
    }

    const existingNip = await prisma.admin.findUnique({ where: { nip: String(nip).trim() } });
    if (existingNip) {
      return res.status(400).json({ message: 'NIP sudah digunakan' });
    }

    const newAdmin = await prisma.admin.create({
      data: {
        admin_name,
        nip: String(nip).trim(),
        telp_admin: telp_admin || '',
        email,
        password,
      }
    });

    return res.status(201).json(newAdmin);
  } catch (error) {
    console.error('Error register admin:', error);
    return res.status(500).json({ message: 'Gagal menambahkan admin', error });
  }
};

// Hapus Admin
const deleteAdmin = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    await prisma.admin.delete({
      where: { id }
    });
    return res.status(200).json({ message: 'Admin berhasil dihapus' });
  } catch (error) {
    console.error('Error delete admin:', error);
    return res.status(500).json({ message: 'Gagal menghapus admin', error });
  }
};

module.exports = {
  userLogin,
  userRegister,
  adminLogin,
  getAdmins,
  registerAdmin,
  deleteAdmin,
};

