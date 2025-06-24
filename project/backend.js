import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

// Mock health metrics endpoint
app.get('/api/health-metrics', (req, res) => {
  res.json({
    heartRate: 72,
    weight: 70,
    activities: ['Caminhada', 'Corrida']
  });
});

// Mock programs endpoint
app.get('/api/programs', (req, res) => {
  res.json([
    { id: 1, name: 'Programa Bem-Estar', duration: '3 meses' },
    { id: 2, name: 'Desafio Nutrição', duration: '1 mês' }
  ]);
});

// Health metric POST
app.post('/api/health-metrics', (req, res) => {
  // Here you would save to a database
  res.status(201).json({ message: 'Métricas salvas com sucesso!' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
