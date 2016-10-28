const express = require('express');
const path = require('path');
const compression = require('compression');
const cors = require('cors');

const app = express();

app.use(compression());
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Production Express Server on PORT: ${PORT} with CORS`);
});
