const express = require('express');
const mongoClient = require('mongodb').MongoClient;

const dbUsers = 'mongodb://localhost:27017/projects';
const router = express.Router();


router.get('/getProjects', async (req, res) => {
  try {
    const db = await mongoClient.connect(dbUsers);
    const data = await db.collection('projects').find().toArray();
    db.close();
    res.send(data);
  } catch (e) {
    res.send(e);
  }
});

router.post('/auth', async (req, res) => {
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
      status: 'router error',
    });
  }
});

router.post('/deleteProject', async (req, res) => {
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

router.post('/createProject', async (req, res) => {
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

router.post('/updateProject', async (req, res) => {
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
    res.send({ success: false });
  }
});

module.exports = router;
