import { randomBytes } from 'crypto';

// Générer une clé API aléatoire
const apiKey = randomBytes(20).toString('hex');
console.log(`Votre clé API générée est : ${apiKey}`);
