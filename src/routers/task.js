const express = require('express');
const Tasks = require('../models/task');
const router = new express.Router();

router.delete('/tasks/:id', async (req, res) => {
  try {
    const task = await Tasks.findOneAndDelete(req.params.id);
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.patch('/tasks/:id', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['description', 'completed'];

  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invaild update!' });
  }
  try {
    const task = await Tasks.findById(req.params.id);

    updates.forEach((update) => (task[update] = req.body[update]));
    await task.save();
    // const task = await Tasks.findByIdAndUpdate(req.params.id, req.body, {
    //   new: true,
    //   runValidators: true,
    // });
    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Tasks.find({});
    res.send(tasks);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get('/tasks/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const task = await Tasks.findById(_id);
    if (!task) {
      return res.status(404).send();
    }

    res.send(task);
  } catch (err) {
    res.status(500).send();
  }
});

router.post('/tasks', async (req, res) => {
  const task = new Tasks(req.body);
  try {
    await task.save();
    res.status(201).send(task);
  } catch {
    res.status(400).send(err);
  }
});

module.exports = router;
