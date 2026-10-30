const { spawn, execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

console.clear();
console.log('\x1b[36m%s\x1b[0m', '===============================================================');
console.log('\x1b[1m\x1b[33m%s\x1b[0m', '   PRAJAGAMER - WEBSITE PENDAFTARAN MAGANG DISDUKCAPIL');
console.log('\x1b[36m%s\x1b[0m', '===============================================================');

// Pastikan database SQLite sudah ada dan terisi seed jika baru pertama kali
const dbPath = path.join(__dirname, 'backend/prisma/dev.db');
if (!fs.existsSync(dbPath)) {
  console.log('\x1b[33m%s\x1b[0m', '[SETUP] Database belum terdeteksi. Melakukan sinkronisasi schema dan seeding dummy data...');
  try {
    execSync('node "backend/node_modules/prisma/build/index.js" db push --schema="backend/prisma/schema.prisma"', { stdio: 'inherit' });
    execSync('node backend/src/seed.js', { stdio: 'inherit' });
    console.log('\x1b[32m%s\x1b[0m', '[SETUP] Database dan dummy data siap!');
  } catch (err) {
    console.error('\x1b[31m%s\x1b[0m', '[SETUP] Gagal inisialisasi database:', err.message);
  }
}

console.log('\n\x1b[32m%s\x1b[0m', 'Memulai Server Backend & Frontend sekaligus...');
console.log('---------------------------------------------------------------');
console.log('\x1b[34m%s\x1b[0m', '  -> Frontend URL  : http://localhost:5173');
console.log('\x1b[36m%s\x1b[0m', '  -> Backend API   : http://localhost:5000');
console.log('---------------------------------------------------------------');
console.log('\x1b[35m%s\x1b[0m', 'AKUN DEMO UNTUK PENGUJIAN:');
console.log('  [ADMIN]');
console.log('    - NIP      : admin  | Password: admin');
console.log('    - NIP      : 198503152010011002 (Budi Santoso) | Password: password123');
console.log('    - Akses    : http://localhost:5173/loginadmin');
console.log('  [USER / PELAMAR]');
console.log('    - NIK      : 3374011203010001 (Yohanes Dimas Pratama) | Password: password123');
console.log('    - NIK      : 3374025408020002 (Siti Rahmawati) | Password: password123');
console.log('    - Akses    : http://localhost:5173/login');
console.log('---------------------------------------------------------------\n');

const isWin = process.platform === 'win32';
const cmdExecutable = isWin ? 'cmd.exe' : 'npm';

// Jalankan Backend
const backendProc = spawn(cmdExecutable, isWin ? ['/c', 'npm', 'run', 'dev'] : ['run', 'dev'], {
  cwd: path.join(__dirname, 'backend'),
  env: { ...process.env, PORT: '5000' }
});

// Jalankan Frontend
const frontendProc = spawn(cmdExecutable, isWin ? ['/c', 'npm', 'run', 'dev'] : ['run', 'dev'], {
  cwd: path.join(__dirname, 'frontend')
});

function formatLog(prefix, colorCode, data) {
  const lines = data.toString().split('\n');
  for (const line of lines) {
    if (line.trim().length > 0) {
      console.log(`\x1b[${colorCode}m[${prefix}]\x1b[0m ${line}`);
    }
  }
}

backendProc.stdout.on('data', (data) => formatLog('BACKEND', '36', data));
backendProc.stderr.on('data', (data) => formatLog('BACKEND_ERR', '31', data));

frontendProc.stdout.on('data', (data) => formatLog('FRONTEND', '35', data));
frontendProc.stderr.on('data', (data) => formatLog('FRONTEND_ERR', '31', data));

function cleanup() {
  console.log('\n\x1b[33m%s\x1b[0m', 'Menghentikan backend dan frontend...');
  if (isWin) {
    if (backendProc.pid) {
      try { execSync(`taskkill /pid ${backendProc.pid} /T /F`); } catch (e) {}
    }
    if (frontendProc.pid) {
      try { execSync(`taskkill /pid ${frontendProc.pid} /T /F`); } catch (e) {}
    }
  } else {
    backendProc.kill('SIGTERM');
    frontendProc.kill('SIGTERM');
  }
  process.exit(0);
}

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);
process.on('exit', cleanup);
