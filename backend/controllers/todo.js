const ToDo = require("../models/todo");

//create todo
exports.create = (req , res) =>{
    
    const todo = new ToDo(req.body);
    todo.save((err , todo) => {
        if(err){
            return res.status(400).json({
                error:" NOT able to todo in DB"
            });
        }
         res.json({todo});
    });

}


//update todo

exports.update= ( req , res , todoId) =>{
 
    console.log("REq" , req.body)
    var id = req.params.todoId;
    console.log("ID" ,req.params.todoId)
  var updatedescription= req.body.description;
  var updateresponsible = req.body.responsible ;
  var updatepriority  = req.body.priority ;
 
  ToDo.updateOne(
    { _id: id },
    { $set: { description:updatedescription, responsible: updateresponsible, priority:updatepriority } },
    (err, updatedTodo) => {
        if (err){
                    return res.status(400).json({
                        error:"Failed to update todo"
                    });
                }
                res.json(updatedTodo);
      
      }
    
  );
    


};

//get todo by id
exports.getTodoById = (req , res , next , id ) => {
   ToDo.findById(id).exec( (err , todo) => {
        if(err ){
            return res.status(400).json({
                error: "Todo not found in DB"
            });
        }
        req.todo= todo;
        next();
    });
   
   };
//get all todo list
exports.todoList = (req, res) => {
   
        ToDo.find().exec( ( err , todo) =>{ 
          if(err){
              return res.status(400).json({
                  error:"Not todo found"
              });
          }
     
          res.json(todo);
        });
    
  };

  //get a signle todo list
  exports.getatodo = (req , res) =>{
   
    return res.json(req.todo)
};

  
