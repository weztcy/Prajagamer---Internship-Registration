const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const path = require('path');
const fs = require('fs');

const getBanner = async (req, res) => {
  try {
    const nameBanner = req.query.nameBanner || 'Lowongan';
    const banner = await prisma.banner.findFirst({
      where: { name: nameBanner }
    });

    const uploadsDir = path.join(__dirname, '../../uploads');
    let bannerFile = banner ? banner.filename : 'banner_lowongan.png';
    let bannerPath = path.join(uploadsDir, bannerFile);

    if (!fs.existsSync(bannerPath)) {
      // Fallback ke logo atau default avatar jika belum ada
      const fallbackFile = path.join(uploadsDir, 'avatar_default.png');
      if (fs.existsSync(fallbackFile)) {
        return res.sendFile(fallbackFile);
      }
      return res.status(404).send('Banner tidak ditemukan');
    }

    return res.sendFile(bannerPath);
  } catch (error) {
    console.error('Error getBanner:', error);
    return res.status(500).json({ message: 'Gagal mengambil banner', error });
  }
};

const updateBanner = async (req, res) => {
  try {
    const nameBanner = req.body.nameBanner || 'Lowongan';
    if (!req.file) {
      return res.status(400).send('File banner tidak ditemukan');
    }

    const updatedBanner = await prisma.banner.upsert({
      where: { name: nameBanner },
      update: { filename: req.file.filename },
      create: { name: nameBanner, filename: req.file.filename }
    });

    return res.status(200).json({
      message: 'Banner berhasil diunggah',
      banner: updatedBanner
    });
  } catch (error) {
    console.error('Error updateBanner:', error);
    return res.status(500).json({ message: 'Gagal mengunggah banner', error });
  }
};

module.exports = {
  getBanner,
  updateBanner
};

