const express = require('express');
const mongo = require('mongodb');

const mongoClient = mongo.MongoClient;
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
    const data = req.body;
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
    const data = req.body;
    const db = await mongoClient.connect(dbUsers);
    const result = await db.collection('projects').findOneAndDelete({ _id: new mongo.ObjectID(data._id) });
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
    const data = req.body;
    const db = await mongoClient.connect(dbUsers);
    const result = await db.collection('projects').insert(data);
    db.close();
    res.send({ 
      success: true, 
      _id: result.ops[0]._id,
    });
  } catch (e) {
    res.send({ success: false });
  }
});

router.post('/updateProject', async (req, res) => {
  try {
    const data = req.body;
    const { 
      name, platform, 
      hockeyAppId, redmineId,
      github, teamCityId,
    } = data;
    const db = await mongoClient.connect(dbUsers);
    const result = await db.collection('projects')
      .findOneAndUpdate(
        { _id: new mongo.ObjectID(data._id) }, 
        { 
          name, 
          platform,
          hockeyAppId, 
          redmineId,
          github, 
          teamCityId,
        },
      );
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
