const Todo = require("../models/Todo");

exports.getTodo = async(req,res) =>{
    try {
        
        const todos = await Todo.find({});

        res.status(200).json(
            {
                success:true,
                data:todos,
                message:'Entire todos fetched'
            }
        )
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success:false,
            data:error.message,
            message:"Internal server error",
        })
    }
}

exports.getTodoByID = async(req,res)=>{
    try {
        const id = req.params.id;
        const todo = await Todo.findById({_id:id});

        if (!todo) {
            return res.status(404).json({
                success:false,
                message:'No data found for given id'
            })
        }

        res.status(200).json(
            {
                success:true,
                data:todo,
                message:' Todo fetched'
            }
        )
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success:false,
            data:error.message,
            message:"Internal server error",
        })
    }
}