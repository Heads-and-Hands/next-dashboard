const express = require('express');
const proxy = require('http-proxy-middleware');
const mongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const dbUsers = 'mongodb://localhost:27017/projects';

const proxyAndroid = require('../next-dashboard/proxy/teamcity-android');
const proxyIos = require('../next-dashboard/proxy/teamcity-ios');
const proxyRedmine = require('../next-dashboard/proxy/redmine');


app.prepare()
  .then(() => {
    const server = express();
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(bodyParser.json());
    server.use(bodyParser.text());

    server.use(express.static('./dist'));
    server.use('/teamcity/ios', proxy(proxyIos));
    server.use('/teamcity/android', proxy(proxyAndroid));
    server.use('/redmine', proxy(proxyRedmine));

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.get('/api/getProjects', async (req, res) => {
      try {
        const db = await mongoClient.connect('mongodb://localhost:27017/projects');
        const data = await db.collection('projects').find().toArray();
        db.close();
        res.send(data);
      } catch (e) {
        console.warn(e);
      }
    });

    server.post('/api/auth', async (req, res) => {
      try {
        const data = JSON.parse(req.body);
        const db = await mongoClient.connect(dbUsers);
        const user = await db.collection('users').find(data).toArray();
        db.close();
        if (user.length !== 0) {
          return res.send({
            success: true,
          });
        }
        return res.send({
          success: false,
        });
      } catch (e) {
        return res.send({
          status: 'server error',
        });
      }
    });

    server.post('/api/deleteProject', async (req, res) => {
      try {
        const data = JSON.parse(req.body);
        const db = await mongoClient.connect(dbUsers);
        const result = await db.collection('projects').findOneAndDelete(data);
        db.close();
        res.send({
          success: true,
          result,
        });
      } catch (e) {
        res.send({ success: false });
      }
    });

    server.post('/api/createProject', async (req, res) => {
      try {
        const data = JSON.parse(req.body);
        const db = await mongoClient.connect(dbUsers);
        const result = await db.collection('projects').insert(data);
        db.close();
        res.send({ success: true });
      } catch (e) {
        res.send({ success: false });
      }
    });

    server.post('/api/updateProject', async (req, res) => {
      try {
        const data = JSON.parse(req.body);
        const db = await mongoClient.connect(dbUsers);
        const result = await db.collection('projects').findOneAndUpdate(data);
        db.close();
        res.send({
          success: true,
          result,
        });
      } catch (e) {
        console.log(e);
        res.send({ success: false });
      }
    });

    server.listen(port, () => console.log(`Server is listening on ${port}`));
  });
