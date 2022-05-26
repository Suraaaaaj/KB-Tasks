const express = require("express");
const joi = require("joi");
const bodyParser = require("body-parser");
const users = require("./users").users;
var currUsers = [];

const app = express();

app.use(bodyParser());
const PORT_NO = 8080;

//  Home endpoint 
app.get('/',(req,res)=>{ 
    res.write("<p>http://localhost:8080/get - To get all the data</p>" );
    res.write("<p>http://localhost:8080/id - To get the user of particular id.</p>");
    res.write("<p>http://localhost:8080/delete - To delete the user of particular id.</p>")
    res.write("<p>http://localhost:8080/add - To add the new user.</p>")
    res.write("<p>http://localhost:8080/getAutoSuggest - To get auto suggestion with a substring and limit.</p>")
    res.write("<p>http://localhost:8080/put - To replace the user details.</p>")
    res.send();
})

//  To get all the users available 
app.get('/get',(req,res)=>{
    findAvailabeUsers();
    res.json(currUsers);
})

//  To get the user with particular id provided
app.get('/:id',(req,res)=>{
    const id = req.params.id;
    let d = {};
    console.log(id);
    for(let ind = 0; ind < users.length; ind++){
        const element = users[ind];
        if(element.id == id){
            d = element;
            break;
        }
    }
    res.json(d);
})

// To delete the user with given id
app.post('/delete',(req,res)=>{
    const id = req.body.id;
    console.log(id);
    
    for(let ind = 0; ind < users.length; ind++){
        const element = users[ind];
        if(element.id == id){
            element.isDeleted = true;
            break;
        }
    }
    findAvailabeUsers();
    res.json(currUsers);
})

// To add the new user
app.post('/add',(req,res)=>{
    const data = req.body;
    console.log(data);
    users.push(data);
    findAvailabeUsers();
    res.json(currUsers);
})

// to get auto suggested list with given substring and size equal to the limit provided
app.post('/getAutoSuggest',(req,res)=>{
    const data = req.body;
    const substring = data.substring;
    var limit = data.limit;
    var list = [];
    for (let ind = 0; ind < users.length; ind++) {
        const element = users[ind];
        
        if(element.login.includes(substring) && limit){
            limit-=1;
            list.push(element);
        }
    }
    res.json(list);     
})

// to replace the users data
app.put('/put',(req,res)=>{
    const data = req.body;
    var flag = false;
    for(let ind = 0; ind < users.length; ind++){
        if(users[ind].id===data.id){
            flag = true;
            users[ind].login = data.login;
            users[ind].password = data.password;
            users[ind].age = data.age;
            users[ind].isDeleted = data.isDeleted;
            break;
        }
    }
    if(!flag){
        users.push(data);
    }
    findAvailabeUsers();
    res.json(currUsers);
})

// To sort the available users by checking the isDeleted property
function findAvailabeUsers(){
    currUsers = [];
    for (let ind = 0; ind < users.length; ind++) {
        const element = users[ind];
        if(element.isDeleted == false){
            currUsers.push(element);
        }
    }
}
    
// Start server

app.listen(PORT_NO,()=>{
    console.log(`Server is running on port - ${PORT_NO}`);
})