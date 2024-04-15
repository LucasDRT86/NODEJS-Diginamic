const Tasks = require('../repository/taskRepository');
const controller = {};

controller.getAll = (req, res) => {
  res.send(Tasks);
};

controller.store = (req, res) => {
  const task = {
   title :req.body.title
  };

  if(req.body.description !==undefined)
  task.decription =req.body.decription;
  if(req.body.done !==undefined)
  task.done =req.body.done;
  if(req.body.start_date !==undefined)
  task.start_date =req.body.start_date;
  if(req.body.end_date !==undefined)
  task.end_date =req.body.end_date;

  Tasks.create(task).then((queryResult) => res.json)
  Tasks.push(task);
  res.json(task);
};

controller.update = (req, res) => {
  const task ={};
    if(req.body.title !==undefined)
   task.title =req.body.title;
 
   if(req.body.description !==undefined)
   task.decription =req.body.decription;
   if(req.body.done !==undefined)
   task.done =req.body.done;
   if(req.body.start_date !==undefined)
   task.start_date =req.body.start_date;
   if(req.body.end_date !==undefined)
   task.end_date =req.body.end_date;

  res.send(task);
};

controller.destroy = (req, res) => {
  const id = parseInt(req.params.id);
  const index = Tasks.findIndex((task) => task.id === id);
  Tasks.splice(index, 1);
  res.send('Task deleted');
};

module.exports = controller;
