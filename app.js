import express from 'express';
// import { router as formRouter } from './routes/form.js';
// import { router as indexRouter } from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

// app.use('/new', formRouter);
// app.use('/', indexRouter);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => { console.log(`Server running on port: ${PORT}`)});