var express = require("express");
var router = express.Router();
var mongojs = require("mongojs");
var db = mongojs("mytodos", ["todos"]);



router.get("/todos", (req, res, next)=>{ //get request to todos database
    db.todos.find( (err, todos) =>{
      if(err){
          res.send(err);
      }
      res.json(todos);
    });
});



module.exports = router;