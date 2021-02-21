require('../src/db/mongoose');
const { count } = require('../src/models/task');
const Tasks = require('../src/models/task');

const deleteById = async (id) => {
  const deleteId = await Tasks.findByIdAndDelete(id);
  const countUncompleted = await Tasks.countDocuments({ completed: false });
  return countUncompleted;
};

deleteById('602c133cb2363a66b957e058', false)
  .then((countUncompleted) => {
    console.log(countUncompleted);
  })
  .catch((err) => {
    console.log(err);
  });
