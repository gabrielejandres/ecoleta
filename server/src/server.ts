import express from 'express';
import cors from 'cors';
import routes from './routes';
import path from 'path';

const app = express();

app.use(cors());
// para que o express entenda o corpo da requisição em formato JSON
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);