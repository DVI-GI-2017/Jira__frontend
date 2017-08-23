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

const backendURL = 'http://jira-clone.herokuapp.com/api/v1';

app.post('/api/v1/checkUser', (req, res) => {
  res.send(req.body);
});

app.get('/api/v1/cur-user', (req, res) => {
  http.get(`${backendURL}/cur-user`, (response) => {
    res.sendStatus(response.statusCode);
  }).on('error', (e) => {
    res.send(e);
  });
});

app.post('/api/v1/signup', (req, res) => {
  console.log(req.body);

  res.status(200).send(req.body);
});

app.listen(process.env.PORT || 3200, () => {
  console.log(`App started on port ${process.env.PORT || 3200}`);
});
