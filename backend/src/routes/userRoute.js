const express = require('express');
// Membuat instance router
const router = express.Router();
// Import controller untuk user
const userController = require('../controllers/userController');

// Endpoint User
// Menampilkan semua pengguna
router.get('/', userController.getAllUsers);
// Menambahkan pengguna baru
router.post('/', userController.createUser);
// Form sederhana di browser untuk menambah use
router.get('/form', (req, res) => {
  res.send(`
    <html>
      <head><title>Tambah User</title></head>
      <body>
        <h1>Tambah User Baru</h1>
        <form method="POST" action="/users">
          <label>Nama:</label><br/>
          <input type="text" name="name" required/><br/><br/>
          
          <label>Email:</label><br/>
          <input type="email" name="email" required/><br/><br/>
          
          <label>Password:</label><br/>
          <input type="password" name="password" required/><br/><br/>

          <button type="submit">Tambah</button>
        </form>
      </body>
    </html>
  `);
});
// Menampilkan detail user berdasarkan ID
router.get('/:id', userController.getUserById);

// Ekspor router agar bisa digunakan di file lain
module.exports = router;