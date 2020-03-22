var express = require("express");
var router = express.Router();
var mongojs = require("mongojs");
var db = mongojs("mytodos", ["todos"]);


//get request to all todos in the database
router.get("/todos", (req, res, next)=>{ 
    db.todos.find( (err, todos) =>{
      if(err){
          res.send(err);
      }
      res.json(todos);
    });
});

//post request to add todo to database
router.post("/todo", (req, res, next)=>{
     var todo = req.body;
     console.log(todo);
     if(!todo.title){
         res.status(400);
         res.json({
             error : "inputed wrong data"
         });
     } else {
         db.todos.save(todo, (err, todo)=>{
           if(err){
               res.send(err);
           }
           res.json(todo);
         });
     }
});


module.exports = router;