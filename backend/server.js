import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes/routes.js';

const app = express();
const port = 3000;

app.use(cors({
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST'],
}));

app.use('/api', routes);

// Servir les fichiers statiques du dossier 'uploads'
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
