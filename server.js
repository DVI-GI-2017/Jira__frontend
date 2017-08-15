const express = require('express');
const app = express();

app.use('/', express.static('src'));
app.use('*', express.static('src'));

app.listen(process.env.PORT || 5002, () => {
  console.log(`App started on port ${process.env.PORT || 5002}`);
});
