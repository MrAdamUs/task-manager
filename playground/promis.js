require('../src/db/mongoose');
const Tasks = require('../src/models/task');

Tasks.findByIdAndDelete('60287d0a97b55e40275bf35d')
  .then((task) => {
    console.log(task);
    return Tasks.countDocuments({ completed: false });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
