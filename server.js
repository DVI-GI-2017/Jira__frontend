let express = require('express');
let parser = require('body-parser');
let app = express();

app.use('/', express.static('public'));
app.use('/signup', express.static('public'));
app.use('/signin', express.static('public'));
app.use('/projects', express.static('public'));
app.use('/about', express.static('public'));

app.use(parser.json());

app.post('/api/v1/checkUser', function(req, res) {
  res.send(req.body);
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`App started on port ${process.env.PORT || 3000}`);
});
