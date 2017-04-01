











/*
look at line 62
    
*/






var express = require("express");
var bodyParser = require("body-parser");

var {mongoose} = require("./db/db");
var {ObjectID} = require("mongodb");
var {Todo} = require("./models/todo");
var {Users} = require("./models/users");


var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res)=>{
   
    var otherTodo = new Todo({
        text: req.body.text,
        completed: req.body.completed,
        completedAt: req.body.completedAt
    })

    otherTodo.save().then((doc)=>{
        res.send(doc);
    }, (err)=>{
        res.status(400).send(err);
    })
});

app.get("/todos", (req, res)=>{

    Todo.find().then((todos)=>{
        res.send({todos})
    }, (err)=>{
        res.status(400).send(err);
    });

})

//fetching single db item using url parameters
app.get("/todos/:todoId", (req, res)=>{
    //res.send(req.params);//try to send GET request using postman and notice what is returned
    var id = req.params.todoId
    if(!ObjectID.isValid(id)){
        // return console.log("Invalid id");
        res.status(404).send();
    }
    Todo.findById(id).then((todo)=>{
        if(todo){
            res.send({todo});
        }else{
            res.status(404).send();
        }
    }, (err)=>{
        if(err){
            res.status(400).send();
        }
    })

})

app.listen(port)