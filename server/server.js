const express = require('express');
const app = express();
const PORT = 3003;
const path = require('path');

app.use(express.static('../client/dist'));
app.use(express.json());

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'), err => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(PORT, () => console.log('Server is listening on port ' + PORT));