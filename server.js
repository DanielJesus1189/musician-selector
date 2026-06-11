// server.js – back‑end (Node + Express + SQLite)

const express = require('express');
const path = require('path');
const app = express();
const sqlite3 = require('sqlite3').verbose();

// File-based SQLite DB
const db = new sqlite3.Database('./musicians.db');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // serve index.html automatically

/* -------------------------------------------------
   Seed 50 musicians
------------------------------------------------- */
// Build an array of musicians with custom data
const musicians = [
  { id: 1, name: 'Cãibra', instrument: 'Bandolim', vocalRange: 'Médio' },
  { id: 2, name: 'Brisa', instrument: 'Contra-baixo', vocalRange: 'Baixo' },
  { id: 3, name: 'Afias', instrument: 'Percussão', vocalRange: 'Médio' },
  { id: 4, name: 'Chai Thi', instrument: 'Bandolim', vocalRange: 'Médio' },
  { id: 5, name: 'OP', instrument: 'Bandolim', vocalRange: 'Médio' },
  { id: 6, name: 'Bochechas', instrument: 'Cavaquinho', vocalRange: 'Alto' },
  { id: 7, name: 'Xuxitado', instrument: 'Cavaquinho', vocalRange: 'Médio' },
  { id: 8, name: 'GT', instrument: 'Cavaquinho', vocalRange: 'Alto' },
  { id: 9, name: 'Abobrinha', instrument: 'Percussão', vocalRange: 'Alto' },
  { id: 10, name: 'Tubão', instrument: 'Bandolim', vocalRange: 'Médio' },
  { id: 11, name: 'Nigel', instrument: 'Acordeão', vocalRange: 'Baixo' },
  { id: 12, name: 'Encosto', instrument: 'Cavaquinho', vocalRange: 'Médio' },
  { id: 13, name: 'Esquilo', instrument: 'Pandeireta', vocalRange: 'Alto' },
  { id: 14, name: 'Fitas', instrument: 'FP', vocalRange: 'Baixo' },
  { id: 15, name: 'Tchitchas', instrument: 'Percussão', vocalRange: 'Baixo' },
  { id: 16, name: 'Crocs', instrument: 'FP / Pandeireta', vocalRange: 'Médio' },
  { id: 17, name: 'Galinha', instrument: 'FP / Pandeireta', vocalRange: 'Alto' },
  { id: 18, name: 'Chucão', instrument: 'FP / Pandeireta', vocalRange: 'Baixo' },
  { id: 19, name: 'Buracos', instrument: 'Bandolim', vocalRange: 'Alto' },
  { id: 20, name: 'Tetris', instrument: 'Guitarra', vocalRange: 'Alto' },
  { id: 21, name: 'Frouxa', instrument: 'FP / Pandeireta', vocalRange: 'Alto' },
  { id: 22, name: 'Abanico', instrument: 'Guitarra', vocalRange: 'Baixo' },
  { id: 23, name: 'Mista', instrument: 'Contra-baixo', vocalRange: 'Alto' },
  { id: 24, name: 'Molho', instrument: 'Cavaquinho', vocalRange: 'Médio' },
  { id: 25, name: 'Nickstick', instrument: 'FP', vocalRange: 'Baixo' },
  { id: 26, name: 'Oral B', instrument: 'FP / Pandeireta', vocalRange: 'Alto' },
  { id: 27, name: 'Pirata', instrument: 'Contra-baixo', vocalRange: 'Baixo' },
  { id: 28, name: 'Coxo', instrument: 'Guitarra', vocalRange: 'Médio' },
  { id: 29, name: 'AC', instrument: 'FP / Pandeireta', vocalRange: 'Alto' },
  { id: 30, name: 'Slim Shady', instrument: 'FP', vocalRange: 'Médio' },
  { id: 31, name: 'Star', instrument: 'Pandeireta', vocalRange: 'Alto' },
  { id: 32, name: 'Terceiro', instrument: 'Guitarra', vocalRange: 'Baixo' },
  { id: 33, name: 'Tosta', instrument: 'Guitarra', vocalRange: 'Médio' },
  { id: 34, name: 'Trovador', instrument: 'Guitarra', vocalRange: 'Médio' },
  { id: 35, name: 'Copos', instrument: 'Guitarra', vocalRange: 'Alto' },
  { id: 36, name: 'Kim Possible', instrument: null, vocalRange: 'Alto' },
  { id: 37, name: 'Palestras', instrument: 'Guitarra / Cavaquinho', vocalRange: 'Baixo' },
  { id: 38, name: 'Elisa', instrument: 'FP', vocalRange: 'Médio' },
  { id: 39, name: 'Preto', instrument: 'Guitarra', vocalRange: 'Baixo' },
  { id: 40, name: 'Axe', instrument: 'Bandolim', vocalRange: 'Baixo' },
  { id: 41, name: 'Xuxa', instrument: 'Cavaquinho', vocalRange: 'Alto' },
  { id: 42, name: 'Amélia', instrument: 'Guitarra', vocalRange: 'Alto' },
  { id: 43, name: 'Mid', instrument: 'Guitarra', vocalRange: 'Médio' },
  { id: 44, name: 'Macaca', instrument: null, vocalRange: 'Alto' },
  { id: 45, name: 'Compensas', instrument: 'FP / Pandeireta', vocalRange: 'Alto' },
  { id: 46, name: 'Rick', instrument: 'Percussão', vocalRange: 'Baixo' },
  { id: 47, name: 'Nuno', instrument: 'FP', vocalRange: 'Baixo' },
  { id: 48, name: 'Rainho', instrument: 'FP', vocalRange: 'Médio' },
  { id: 49, name: 'Chibata', instrument: 'Guitarra', vocalRange: 'Baixo' },
  { id: 50, name: 'Zappa', instrument: 'Guitarra', vocalRange: 'Baixo' },
  { id: 51, name: 'Apenas', instrument: null, vocalRange: 'Médio' },
  { id: 52, name: 'Freira', instrument: 'FP / Pandeireta', vocalRange: 'Médio' },
  { id: 53, name: 'Tomas', instrument: 'Acordeão', vocalRange: 'Baixo' },
  { id: 54, name: 'Dora', instrument: 'Flauta Transversal', vocalRange: 'Alto' },
  { id: 55, name: 'Vitor', instrument: 'FP', vocalRange: 'Médio' },
  { id: 56, name: 'Olá', instrument: 'FP', vocalRange: 'Alto' },
  { id: 57, name: 'Supino', instrument: 'FP', vocalRange: 'Baixo' },
];
// Create table + insert seed data only if needed
db.serialize(() => {
  db.run(
    `CREATE TABLE IF NOT EXISTS musicians (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      instrument TEXT,
      vocalRange TEXT NOT NULL
    )`
  );

  // Check if table has data, seed only if empty
  db.get('SELECT COUNT(*) as count FROM musicians', (err, row) => {
    if (err) {
      console.error('DB count error:', err);
      return;
    }
    
    if (row && row.count === 0) {
      console.log('Seeding database with musicians...');
      const stmt = db.prepare(
        `INSERT INTO musicians (id, name, instrument, vocalRange) VALUES (?,?,?,?)`
      );
      musicians.forEach(m => stmt.run(m.id, m.name, m.instrument, m.vocalRange));
      stmt.finalize();
      console.log('✓ Database seeded');
    }
  });
});

/* -------------------------------------------------
   API
------------------------------------------------- */
// GET all musicians
app.get('/api/musicians', (req, res) => {
  db.all('SELECT * FROM musicians', [], (err, rows) => {
    if (err) {
      console.error('DB error:', err);
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

/* -------------------------------------------------
   Server start
------------------------------------------------- */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server listening on http://localhost:${PORT}`));
