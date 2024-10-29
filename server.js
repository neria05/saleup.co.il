const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Static files
app.use(express.static('public'));

// Template engine
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Routes
app.get('/', (req, res) => {
  res.render('home');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});