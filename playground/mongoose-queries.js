


/* 
Methods of fetching data using mongoose
*/


const {mongoose} = require("./../db/db");
const {Todo} = require("./../models/todo");
const {Users} = require("./../models/users");

/*
id = '58dfaef29fe5e21af4abddda';

//[1] find() --> find all matched results -- return array
Todo.find({
    _id: id//mongoose convert the string to ObjectID(unlike mongodb native driver)
}).then((todos)=>{
    console.log(todos);
});

//[2] findOne() --> find the first matched result -- return object
Todo.findOne({
    _id: id
}).then((todo)=>{
    console.log(todo);
});



//[3] findById()

Todo.findById(id).then((todo)=>{
    console.log("Todo By Id", todo);
});
*/

//The challenge
//query the user
var id = '58d933b1579f181b1c25afec';
Users.findById(id).then((user)=>{
    if(!user){
        return console.log("The user not found");
    }
    console.log("The user: ", user);
}, (err)=>{
    console.log(err);
})