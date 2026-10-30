const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Helper untuk mengambil userId dari Authorization Header
const getUserIdFromAuth = async (req) => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];
    // Token format: user-token-<userId>-<timestamp>
    const parts = token.split('-');
    if (parts.length >= 3 && !isNaN(parseInt(parts[2]))) {
      const id = parseInt(parts[2]);
      const user = await prisma.user.findUnique({ where: { id } });
      if (user) return user.id;
    }
  }
  // Fallback: kembalikan user pertama untuk testing
  const firstUser = await prisma.user.findFirst();
  return firstUser ? firstUser.id : 1;
};

// Dashboard Admin
const getDashboard = async (req, res) => {
  try {
    const rawUsers = await prisma.user.findMany({
      include: {
        Profile: true,
        University: true,
        Regist: true,
      },
      orderBy: { id: 'desc' },
    });

    const totalApplicants = rawUsers.length;
    const verifyingApplicants = rawUsers.filter(
      (u) => u.status === 'Verifying' || u.status === 'Pending'
    ).length;
    const acceptedApplicants = rawUsers.filter(
      (u) => u.status === 'Accepted'
    ).length;
    const rejectedApplicants = rawUsers.filter(
      (u) => u.status === 'Rejected'
    ).length;

    // Format applicantsList agar cocok dengan DashboardAdmin yang mengakses applicant.user.* dan applicant.user_id
    const applicantsList = rawUsers.map((u) => ({
      user_id: u.id,
      id: u.id,
      user: u,
      // Juga sediakan properti di root jika diakses langsung
      ...u,
    }));

    return res.status(200).json({
      applicantsList,
      totalApplicants,
      verifyingApplicants,
      acceptedApplicants,
      rejectedApplicants,
    });
  } catch (error) {
    console.error('Error dashboard:', error);
    return res.status(500).json({ message: 'Gagal mengambil data dashboard', error });
  }
};

// Data Pengguna (Users)
const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      include: {
        Profile: true,
        University: true,
        Regist: true,
      },
      orderBy: { id: 'desc' },
    });
    return res.status(200).json(users);
  } catch (error) {
    console.error('Error getAllUsers:', error);
    return res.status(500).json({ message: 'Gagal mengambil data pengguna', error });
  }
};

// Data Pelamar (Users2)
const getAllApplicants = async (req, res) => {
  try {
    const applicants = await prisma.user.findMany({
      include: {
        Profile: true,
        University: true,
        Regist: true,
      },
      orderBy: { id: 'desc' },
    });
    return res.status(200).json(applicants);
  } catch (error) {
    console.error('Error getAllApplicants:', error);
    return res.status(500).json({ message: 'Gagal mengambil data pelamar', error });
  }
};

// Update Status Pelamar / Pengguna
const updateUserStatus = async (req, res) => {
  try {
    const { userId, status } = req.body;
    if (!userId || !status) {
      return res.status(400).json({ message: 'userId dan status wajib dikirim' });
    }

    const updatedUser = await prisma.user.update({
      where: { id: parseInt(userId) },
      data: { status },
      include: {
        Profile: true,
        University: true,
        Regist: true,
      }
    });

    return res.status(200).json({
      message: 'Status berhasil diperbarui',
      data: updatedUser,
    });
  } catch (error) {
    console.error('Error updateUserStatus:', error);
    return res.status(500).json({ message: 'Gagal memperbarui status', error });
  }
};

// Get Profil User
const getProfile = async (req, res) => {
  try {
    const userId = await getUserIdFromAuth(req);
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        Profile: true,
        University: true,
        Regist: true,
      }
    });

    if (!user) {
      return res.status(404).json({ message: 'Profil pengguna tidak ditemukan' });
    }

    return res.status(200).json({
      id: user.id,
      name: user.name,
      university: user.University?.univ_name || '',
      email: user.email,
      telp: user.Profile?.telp_user || '',
      nim: user.University?.nim || '',
      nik: user.Profile?.nik || '',
      place_birth: user.Profile?.place_birth || '',
      date_birth: user.Profile?.date_birth || '',
      birth_date: user.Profile?.date_birth || '',
      gender: user.Profile?.gender || '',
      religion: user.Profile?.religion || '',
      address: user.Profile?.address || '',
      address_ktp: user.Profile?.address_ktp || '',
      city_ktp: user.Profile?.city_ktp || 'Kota Semarang',
      province_ktp: user.Profile?.province_ktp || 'Jawa Tengah',
      domicile_address: user.Profile?.address_domicile || '',
      address_domicile: user.Profile?.address_domicile || '',
      city_domicile: user.Profile?.city_domicile || 'Kota Semarang',
      province_domicile: user.Profile?.province_domicile || 'Jawa Tengah',
      major: user.University?.major || '',
      strata: user.Profile?.strata || 'S1',
      ipk: user.Profile?.ipk || '3.80',
      semester: user.Profile?.semester || '6',
      photo: user.Profile?.photo || 'sample1.jpg',
      name_supervisor: user.Profile?.name_supervisor || '',
      telp_supervisor: user.Profile?.telp_supervisor || '',
      email_supervisor: user.Profile?.email_supervisor || '',
    });
  } catch (error) {
    console.error('Error getProfile:', error);
    return res.status(500).json({ message: 'Gagal memuat profil', error });
  }
};

// Update Profil User
const updateProfile = async (req, res) => {
  try {
    const userId = await getUserIdFromAuth(req);
    const body = req.body || {};

    const profileUpdateData = {};
    if (body.telp || body.noTelp) profileUpdateData.telp_user = body.telp || body.noTelp;
    if (body.tempatLahir || body.place_birth) profileUpdateData.place_birth = body.tempatLahir || body.place_birth;
    if (body.tanggalLahir || body.birth_date || body.date_birth) profileUpdateData.date_birth = body.tanggalLahir || body.birth_date || body.date_birth;
    if (body.gender) profileUpdateData.gender = body.gender;
    if (body.religion) profileUpdateData.religion = body.religion;
    if (body.alamatKTP || body.address_ktp) profileUpdateData.address_ktp = body.alamatKTP || body.address_ktp;
    if (body.kotaKTP || body.city_ktp) profileUpdateData.city_ktp = body.kotaKTP || body.city_ktp;
    if (body.provinsiKTP || body.province_ktp) profileUpdateData.province_ktp = body.provinsiKTP || body.province_ktp;
    if (body.alamatDomisili || body.address_domicile) profileUpdateData.address_domicile = body.alamatDomisili || body.address_domicile;
    if (body.kotaDomisili || body.city_domicile) profileUpdateData.city_domicile = body.kotaDomisili || body.city_domicile;
    if (body.provinsiDomisili || body.province_domicile) profileUpdateData.province_domicile = body.provinsiDomisili || body.province_domicile;
    if (body.ipk) profileUpdateData.ipk = body.ipk;
    if (body.semester) profileUpdateData.semester = body.semester;
    if (body.namaPembimbing || body.name_supervisor) profileUpdateData.name_supervisor = body.namaPembimbing || body.name_supervisor;
    if (body.noTelpPembimbing || body.telp_supervisor) profileUpdateData.telp_supervisor = body.noTelpPembimbing || body.telp_supervisor;
    if (body.emailPembimbing || body.email_supervisor) profileUpdateData.email_supervisor = body.emailPembimbing || body.email_supervisor;

    if (req.file) {
      profileUpdateData.photo = req.file.filename;
    }

    if (Object.keys(profileUpdateData).length > 0) {
      await prisma.profile.update({
        where: { userId },
        data: profileUpdateData,
      });
    }

    if (body.jurusan || body.major) {
      await prisma.university.update({
        where: { userId },
        data: { major: body.jurusan || body.major },
      });
    }

    if (body.nama || body.name) {
      await prisma.user.update({
        where: { id: userId },
        data: { name: body.nama || body.name },
      });
    }

    return getProfile(req, res);
  } catch (error) {
    console.error('Error updateProfile:', error);
    return res.status(500).json({ message: 'Gagal memperbarui profil', error });
  }
};

// Get Data Pendaftaran Magang Form
const getInternshipForm = async (req, res) => {
  try {
    const userId = await getUserIdFromAuth(req);
    const regist = await prisma.regist.findUnique({
      where: { userId }
    });
    return res.status(200).json({ formData: regist || {} });
  } catch (error) {
    console.error('Error getInternshipForm:', error);
    return res.status(500).json({ message: 'Gagal mengambil form magang', error });
  }
};

// Submit / Apply Internship Form
const applyInternship = async (req, res) => {
  try {
    const userId = await getUserIdFromAuth(req);
    const { available_space, first_period, last_period } = req.body;

    const registData = {
      available_space: available_space === 'true' || available_space === true,
      first_period: first_period || '2026-11-01',
      last_period: last_period || '2027-02-01',
    };

    if (req.files) {
      if (req.files.recommend_letter) registData.recommend_letter = req.files.recommend_letter[0].filename;
      if (req.files.portofolio) registData.portofolio = req.files.portofolio[0].filename;
      if (req.files.cv) registData.cv = req.files.cv[0].filename;
    }

    const regist = await prisma.regist.upsert({
      where: { userId },
      update: registData,
      create: {
        userId,
        ...registData,
      }
    });

    return res.status(200).json({
      message: 'Pendaftaran magang berhasil!',
      data: regist,
    });
  } catch (error) {
    console.error('Error applyInternship:', error);
    return res.status(500).json({ message: 'Gagal mendaftar magang', error });
  }
};

module.exports = {
  getDashboard,
  getAllUsers,
  getAllApplicants,
  updateUserStatus,
  getProfile,
  updateProfile,
  getInternshipForm,
  applyInternship,
};

