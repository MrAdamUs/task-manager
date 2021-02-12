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
    // db.collection('users').insertOne(
    //   {
    //     _id: id,
    //     name: 'Mike',
    //     age: 32,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert user');
    //     }

    //     console.log(result.ops);
    //   }
    // );
    // db.collection('users').insertMany(
    //   [
    //     {
    //       name: 'Sami',
    //       age: 2,
    //     },
    //     {
    //       name: 'Shosho',
    //       age: 24,
    //     },
    //   ],
    //   (error, resul) => {
    //     if (error) {
    //       return console.log('Unable to insert users');
    //     }
    //     console.log(resul.ops);
    //   }
    // );
    // db.collection('tasks').insertMany(
    //   [
    //     {
    //       description: 'Add new item to my task',
    //       completed: false,
    //     },
    //     {
    //       description: 'Buy domain from google',
    //       completed: true,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert tasks');
    //     }

    //     console.log(result.ops);
    //   }
    // );
  }
);
