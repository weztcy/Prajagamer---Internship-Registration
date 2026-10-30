// Import Prisma Client untuk koneksi ke database
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Mengambil semua user dari tabel "user"
const getAllUsers = async () => {
  return await prisma.user.findMany();
};

// Membuat user baru ke database
const createUser = async (name, email, password) => {
  return await prisma.user.create({
    data: { name, email, password },
  });
};

// Mengambil user berdasarkan ID
const getUserById = async (id) => {
  return await prisma.user.findUnique({
    where: { id },
  });
};

// Ekspor semua fungsi service agar bisa digunakan di controller
module.exports = { getAllUsers, createUser, getUserById };