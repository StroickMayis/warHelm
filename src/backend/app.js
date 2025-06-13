import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
// import { router as formRouter } from './routes/form.js';
// import { router as indexRouter } from './routes/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, '../../dist')));

app.use(express.json());

// app.use(express.urlencoded({ extended: true }));

// app.use('/new', formRouter);
// app.use('/', indexRouter);

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello World' });
});

app.get('/{*splat}', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

app.listen(PORT, () => { 
    console.log(`Server running on port: ${PORT}`);
    console.log(`Serving static files from: ${path.join(__dirname, '../../dist')}`);
}); 