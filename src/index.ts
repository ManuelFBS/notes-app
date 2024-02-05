import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

app.get('/api/notes', async (req, res) => {
  const notes = await prisma.note.findMany();

  res.json(notes);
});

app.post('/api/notes', async (req, res) => {
  const { title, content } = req.body;
  const notes = await prisma.note.create({
    data: { title, content }
  });

  res.json(notes);
});

app.listen(7000, () => {
  console.log('Server is running on localhost:7000');
});
