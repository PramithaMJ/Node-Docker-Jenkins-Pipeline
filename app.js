const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.json([
    {
      id: '1',
      title: 'Hello',
    }
  ]);
});
module.exports = app;
