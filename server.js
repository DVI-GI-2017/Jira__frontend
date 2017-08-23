let express = require('express');
let parser = require('body-parser');
let http = require('http');
let app = express();

app.use('/', express.static('public'));
app.use('/signup', express.static('public'));
app.use('/signin', express.static('public'));
app.use('/projects', express.static('public'));
app.use('/about', express.static('public'));

app.use(parser.json());

const backendOptions = {
  host: 'jira-clone.herokuapp.com',
  port: 443
};

app.post('/api/v1/checkUser', function(req, res) {
  res.send(req.body);
});

app.get('/api/v1/cur-user', function(req, res) {
  res.status(200).send('top');
});

app.post('/api/v1/signup', function(req, res) {
  console.log(req.body);

  res.status(200).send(req.body);
});

app.listen(process.env.PORT || 3200, () => {
  console.log(`App started on port ${process.env.PORT || 3200}`);
});
