const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json());

// Static array sebagai database (berasal dari file JSON)
let mahasiswa = require('../data.json');

// GET /api/mahasiswa - menampilkan seluruh data mahasiswa
app.get('/api/mahasiswa', (req, res) => {
  res.json(mahasiswa);
});

// GET /api/mahasiswa/:index - menampilkan mahasiswa sesuai index
app.get('/api/mahasiswa/:index', (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < mahasiswa.length) {
    res.json(mahasiswa[index]);
  } else {
    res.status(404).json({ error: 'Mahasiswa tidak ditemukan' });
  }
});

// POST /api/mahasiswa - menambahkan mahasiswa baru
app.post('/api/mahasiswa', (req, res) => {
  const { nama, nim } = req.body;
  const newMhs = { nama, nim };
  mahasiswa.push(newMhs);
  res.status(201).json({ message: 'Mahasiswa berhasil ditambahkan', data: newMhs });
});

// DELETE /api/mahasiswa/:index - menghapus mahasiswa berdasarkan index
app.delete('/api/mahasiswa/:index', (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= 0 && index < mahasiswa.length) {
    const deleted = mahasiswa.splice(index, 1);
    res.json({ message: 'Mahasiswa berhasil dihapus', data: deleted[0] });
  } else {
    res.status(404).json({ error: 'Mahasiswa tidak ditemukan' });
  }
});

// Run server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
