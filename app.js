const express = require('express');
const app = express();

module.exports = app;

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('listening on port');
});

app.get('/', (req, res) => {
  res.send(`
    <html>
      <body>
      The Acme Api
      </body>
    </html>
  `);
});
