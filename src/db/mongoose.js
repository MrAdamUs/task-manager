const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    validate(value) {
      if (value < 0) {
        throw new Error('Age must be a postive number');
      }
    },
  },
});

const me = new User({
  name: 'Sami',
  age: -1,
});

me.save()
  .then(() => {
    console.log(me);
  })
  .catch((error) => {
    console.log('Error!', error);
  });

// const Tasks = mongoose.model('Tasks', {
//   description: {
//     type: String,
//   },
//   completed: {
//     type: Boolean,
//   },
// });

// const task1 = new Tasks({
//   description: 'This is my first task with mongoose ',
//   completed: false,
// });

// task1
//   .save()
//   .then(() => {
//     console.log(task1);
//   })
//   .catch((error) => {
//     console.log('Error!', error);
//   });
