// app.js
const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

const port = 3000;


// Set the view engine to Pug
app.set('view engine', 'pug');
// Serve static files from the public directory
app.use(express.static('public'));
// Set the directory for views
app.set('views', path.join(__dirname, 'views'));
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the homepage
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/model', (req, res) => {
  res.render('modelos.pug');
});


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
