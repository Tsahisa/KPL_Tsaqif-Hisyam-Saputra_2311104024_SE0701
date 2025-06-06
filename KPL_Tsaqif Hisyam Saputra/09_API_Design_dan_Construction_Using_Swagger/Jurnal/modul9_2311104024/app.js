const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(express.json());

let movies = require('../movies.json');

// GET all movies
app.get('/api/Movies', (req, res) => {
  res.json(movies);
});

// GET movie by id
app.get('/api/Movies/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id >= 0 && id < movies.length) {
    res.json(movies[id]);
  } else {
    res.status(404).json({ error: 'Movie not found' });
  }
});

// POST add new movie
app.post('/api/Movies', (req, res) => {
  const newMovie = req.body;
  movies.push(newMovie);
  res.status(201).json({ message: 'Movie added successfully', movie: newMovie });
});

// DELETE movie by id
app.delete('/api/Movies/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (id >= 0 && id < movies.length) {
    const deleted = movies.splice(id, 1);
    res.json({ message: 'Movie deleted successfully', movie: deleted[0] });
  } else {
    res.status(404).json({ error: 'Movie not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
