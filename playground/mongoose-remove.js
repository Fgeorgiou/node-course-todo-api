const {ObjectID} = require('mongodb');

var {mongoose} = require('./../server/db/mongoose');
var {Todo} = require('./../server/models/todo');
var {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Note: both methods below return the object that got deleted.
Todo.findOneAndRemove({_id: '5b3cdacc5a952f270a09fa83'}).then((todo) => {
  console.log(todo)
});

Todo.findByIdAndRemove('5b3cdacc5a952f270a09fa83').then((todo) => {
  console.log(todo)
});
