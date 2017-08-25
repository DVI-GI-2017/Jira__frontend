let express = require('express');
let parser = require('body-parser');
let http = process.env.PORT ? require('https') : require('http');
let app = express();

app.use('/', express.static('public'));
app.use('/signup', express.static('public'));
app.use('/signin', express.static('public'));
app.use('/projects', express.static('public'));
app.use('/new-project', express.static('public'));
app.use('/new-task', express.static('public'));
app.use('/add-user', express.static('public'));

app.use(parser.json());

const backendURI = process.env.PORT ? 'https://jira-clone.herokuapp.com/api/v1' : 'http://localhost:3000/api/v1';
const backendURL = process.env.PORT ? 'jira-clone.herokuapp.com' : 'localhost';

const baseOptionsBackend = process.env.PORT ? {
  host: backendURL,
  port: 443
} : {
  host: backendURL,
  port: 3000
};

app.post('/api/v1/checkUser', (req, res) => {
  res.send(req.body);
});

app.get('/api/v1/cur-user', (req, res) => {
  http.get(`${backendURI}/cur-user`, (response) => {
    res.sendStatus(response.statusCode);
  }).on('error', e => {
    res.status(401).send(e);
  });
});

app.post('/api/v1/signup', (req, res) => {
  const request = http.request(Object.assign(baseOptionsBackend, {
    path: '/api/v1/signup',
    method: 'POST'
  }), (response) => {
    response.on('data', data => {
      res.header('Content-Type', 'application/json');
      res.status(response.statusCode).send(data);
    });
  });

  request.write(JSON.stringify(req.body));
  request.end();
});

app.post('/api/v1/signin', (req, res) => {
  const request = http.request(Object.assign(baseOptionsBackend, {
    path: '/api/v1/signin',
    method: 'POST'
  }), (response) => {
    response.on('data', data => {
      res.header('Content-Type', 'application/json');
      res.status(response.statusCode).send(data);
    });
  });

  request.write(JSON.stringify(req.body));
  request.end();
});

app.get('/api/v1/projects', (req, res) => {
  http.get(Object.assign(baseOptionsBackend, {
    path: '/api/v1/projects',
    method: 'GET',
    headers: {
      'Authorization': req.header('Authorization')
    }
  }), (response) => {
    response.on('data', data => {
      console.log('here');
      res.header('Content-Type', 'application/json');
      res.status(200).send(data);
    });
  }).on('error', e => {
    res.send(e);
  });
});

app.get('/api/v1/tasks', (req, res) => {
  http.get(Object.assign(baseOptionsBackend, {
    path: '/api/v1/tasks',
    method: 'GET',
    headers: {
      'Authorization': req.header('Authorization')
    }
  }), (response) => {
    response.on('data', data => {
      res.header('Content-Type', 'application/json');
      res.status(200).send(data);
    });
  }).on('error', e => {
    res.send(e);
  });
});

app.post('/api/v1/new-project', (req, res) => {
  const request = http.request(Object.assign(baseOptionsBackend, {
    path: '/api/v1/projects',
    method: 'POST',
    headers: {
      'Authorization': req.header('Authorization'),
      'Content-Type': 'text/plain'
    }
  }), (response) => {
    response.on('data', data => {
      const jsData = JSON.parse(data.toString());

      if (jsData._id) {
        const requestAddUser = http.request(Object.assign(baseOptionsBackend, {
          path: `/api/v1/projects/${jsData._id}/users`,
          method: 'POST',
          headers: {
            'Authorization': req.header('Authorization')
          }
        }), (response) => {
          response.on('data', data => {
            res.header('Content-Type', 'application/json');
            res.status(response.statusCode).send(data);
          });
        });

        requestAddUser.write(JSON.stringify(req.body.user));
        requestAddUser.end();
      } else {
        res.header('Content-Type', 'application/json');
        res.status(response.statusCode).send(data);
      }
    });
  });

  request.write(JSON.stringify(req.body));
  request.end();
});

app.get('/api/v1/users/:id/projects', (req, res) => {
  http.get(Object.assign(baseOptionsBackend, {
    path: `/api/v1/users/${req.params.id}/projects`,
    method: 'GET',
    headers: {
      'Authorization': req.header('Authorization')
    }
  }), (response) => {
    response.on('data', data => {
      res.header('Content-Type', 'application/json');
      res.status(200).send(data);
    });
  }).on('error', e => {
    res.status(400).send(e);
  });
});

app.get('/api/v1/projects/:id/tasks', (req, res) => {
  http.get(Object.assign(baseOptionsBackend, {
    path: `/api/v1/projects/${req.params.id}/tasks`,
    method: 'GET',
    headers: {
      'Authorization': req.header('Authorization')
    }
  }), (response) => {
    response.on('data', data => {
      res.header('Content-Type', 'application/json');
      res.status(200).send(data);
    });
  }).on('error', e => {
    res.status(400).send(e);
  });
});

app.get('/api/v1/projects/:id/users', (req, res) => {
  http.get(Object.assign(baseOptionsBackend, {
    path: `/api/v1/projects/${req.params.id}/users`,
    method: 'GET',
    headers: {
      'Authorization': req.header('Authorization')
    }
  }), (response) => {
    response.on('data', data => {
      res.header('Content-Type', 'application/json');
      res.status(200).send(data);
    });
  }).on('error', e => {
    res.status(400).send(e);
  });
});

app.get('/api/v1/users', (req, res) => {
  http.get(Object.assign(baseOptionsBackend, {
    path: `/api/v1/users`,
    method: 'GET',
    headers: {
      'Authorization': req.header('Authorization')
    }
  }), (response) => {
    response.on('data', data => {
      res.header('Content-Type', 'application/json');
      res.status(200).send(data);
    });
  }).on('error', e => {
    res.status(400).send(e);
  });
});

app.get('/api/v1/projects', (req, res) => {
  http.get(Object.assign(baseOptionsBackend, {
    path: `/api/v1/projects`,
    method: 'GET',
    headers: {
      'Authorization': req.header('Authorization')
    }
  }), (response) => {
    response.on('data', data => {
      res.header('Content-Type', 'application/json');
      res.status(200).send(data);
    });
  }).on('error', e => {
    res.status(400).send(e);
  });
});

app.post('/api/v1/add-user', (req, res) => {
  const request = http.request(Object.assign(baseOptionsBackend, {
    path: `/api/v1/projects/${req.body.project}/users`,
    method: 'POST',
    headers: {
      'Authorization': req.header('Authorization'),
      'Content-Type': 'text/plain'
    }
  }), (response) => {
    console.log(response.statusCode);
    console.log(response.body);
    res.header('Content-Type', 'application/json');
    res.sendStatus(200);
  });

  console.log(req.body);
  request.write(JSON.stringify(req.body.user));
  request.end();
});

app.use('*', express.static('public'));

app.listen(process.env.PORT || 3200, () => {
  console.log(`App started on port ${process.env.PORT || 3200}`);
});
