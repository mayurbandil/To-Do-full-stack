const express = require("express");
const path = require('path');
const port = 8000;
const app = express();
const db = require('./config/mongoose');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));
const Tasks = require('./models/task');




app.post("/create-task", function (req, res) {
  // contactList.push(req.body); now we dont require to populate the contactlist as we will create a instance whenever the request is made by user

  const newTask = new Tasks(req.body);

  newTask
    .save()
    .then(() => {
      console.log(newTask);
      res.redirect("back");
    })
    .catch((err) => {
      console.log(err);
    });
  // tasks.push(req.body)
  // return res.redirect('back');

});

app.get("/delete-task/", function(req, res){
 let id = req.query.id;
 Tasks.findByIdAndDelete(id).exec();

 return res.redirect("back");

});
app.get("/", function(req, res){
    Tasks.find({})
    .then((tasks) => {
      return res.render("home", {
        title: "mayur ",
        task_list: tasks,
      });
    });
})

app.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }

    console.log(`server is running on port ${port}`);
})