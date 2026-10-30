// Import service yang menangani logika database
const userService = require('../services/userService');

// Controller untuk mengambil semua user
const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json({ message: 'Daftar pengguna', data: users });
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil data pengguna', error });
  }
};

// Controller untuk membuat user baru
const createUser = async (req, res) => {
  try {
    // Ambil data dari body request
    const { name, email, password } = req.body;
    // Validasi input wajib
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Name, email, dan password wajib diisi' });
    }

    // Simpan data user ke database melalui service
    const newUser = await userService.createUser(name, email, password);
    res.status(201).json({ message: 'Pengguna berhasil ditambahkan', data: newUser });
  } catch (error) {
    // Pesan error unik Prisma (misal: email duplikat)
    if (error.code === 'P2002') {
      return res.status(400).json({ message: 'Email sudah digunakan' });
    }
    res.status(500).json({ message: 'Gagal menambahkan pengguna', error });
  }
};

// Controller untuk mengambil user berdasarkan ID
const getUserById = async (req, res) => {
  try {
    // Ambil ID dari parameter URL
    const userId = parseInt(req.params.id);
    const user = await userService.getUserById(userId);

    // Jika user tidak ditemukan
    if (!user) {
      return res.status(404).json({ message: 'Pengguna tidak ditemukan' });
    }

    // Jika ditemukan, kirim datanya
    res.status(200).json({ message: 'Detail pengguna', data: user });
  } catch (error) {
    res.status(500).json({ message: 'Gagal mengambil detail pengguna', error });
  }
};

// Ekspor semua controller agar bisa digunakan di router
module.exports = { getAllUsers, createUser, getUserById };