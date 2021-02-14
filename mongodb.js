// CRUD

const mongodb = require('mongodb');
const MongoClinet = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;

// const { MongoClinet, ObjectID } = require('mongodb');

const connnectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectID();
console.log(id);
console.log(id.getTimestamp());

MongoClinet.connect(
  connnectionURL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database');
    }

    const db = client.db(databaseName);

    // db.collection('users')
    //   .deleteMany({ age: 30 })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    db.collection('tasks')
      .deleteOne({
        _id: new ObjectID('6025c2cca0dbbb221a015ab3'),
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
    //////
  }
);
