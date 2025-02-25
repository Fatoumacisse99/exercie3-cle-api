import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = 3017;
const API_KEY = process.env.API_KEY; 

const apiKeyMiddleware = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (!apiKey || apiKey !== API_KEY) {
    return res.status(401).json({ message: 'Accès refusé, clé API manquante ou incorrecte' });
  }
  next();
};
app.get('/api/private-data', apiKeyMiddleware, (_req, res) => {
  res.json({ message: 'Voici vos données privées.' });
});

app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});
