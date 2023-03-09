//import the mongoose model we created in models file
const Task = require('../models/task')
//middleware
const asyncWrapper = require('../middleware/async')

//in the controller file we want to store all the logic elements for the app.js 
//afterwards we export them and reuse them in the routes file

// const getAllTasks = async (req,res)=>{
//     try{
//         const tasks = await Task.find({}) //Task.find(req.body)
//         //different kind of options
//         res.status(200).json({ tasks })
//         //res.status(200).json({ tasks, amount: tasks.length })
//         //res.status(200).json({ success:true , data: {tasks, nbHits:tasks.length} })
//         //  res
//         //      .status(200)
//         //      .json({ status: "success" , data: { tasks, nbHits : tasks.length} })
//     }catch(error){
//         //res.status(500).json({msg: error})
//         res
//             .status(500)
//             .json({ status: "failed", msg: error.message})
//     }
// }

// use the asyncWrapper Method
 const getAllTasks = asyncWrapper ( async (req, res) => {
    const tasks = await Task.find ({})
    res.status (200).json ({ tasks })
 })

// https://mongoosejs.com/docs/queries.html is only used the documentation :) YES
 


//Post needs a body
//pass it along to the module create method
//since we are using await we want to refactor this callback function and use await instead
const createTask = async (req, res) => {
    try {
    const task = await Task.create(req.body)
    res.status(201).json({ task }) 
    }catch (error) {
        res.status(500).json({msg: error.message})
    }

}

// **LINK https://mongoosejs.com/docs/api/model.html#model_Model-findOne 
const getSingleTask = async (req,res) => {

    try{
        //first destructure (good practise)  **id: taskID is a alias
        const { id: taskID } = req.params;
        const task = await Task.findOne({ _id: taskID })
        //condition
        if (!task) {
            //USE return 
            return res.status(404).json({msg: `no task with this ID ${taskID}`})
    }//else
res.status(200).json({ task })

    }catch (error) {
        res.Status(500).json({ msg: error })
    }
}

//--------------------------------------------------------------------------------------------
//the last Controller 
// https://mongoosejs.com/docs/api/model.html#model_Model-findOneAndUpdate 

const updateSingleTask = async (req,res) => {
    try{
        const { id : taskID}  = req.params;  //korrekt gemacht
        //await function 
        const task = await Task.findOneAndUpdate({ _id : taskID}, req.body, {
            new: true, runValidators: true,
        })  //(conditions, update, options)
        

        if(!task) {
            return res.status(404).json({msg: `There is no taskID ${taskID} to update`})
        }//else

res.status(200).json({ task })

    }catch ( error )
    {
        res.status(500).json({ msg: error })
    }




    //res.send('update single the tasks from json')
}





















//------------------------------------------------------------------------------------------------

// https://mongoosejs.com/docs/api/model.html#model_Model-findOneAndDelete
//handle the delete like the findOne
const deleteSingleTask = async (req,res) => {

    try{
        //destructure the req.params and get id
        const {id : taskID} = req.params;
        const task = await  Task.findOneAndDelete({ _id: taskID});
        if (!task) {
            return res.status(404).json({msg: `There is no Task with ID ${taskID}`})
        } //else
//res.status(200).json({task})
res.status(200).json({task: null, status: 'success'})

    }catch (error) {
        res.status(500).json({msg: error})
    }
}


//export the module 
//best practise is to export the functions as objects {}

module.exports = {
    getAllTasks,
    createTask,
    getSingleTask,
    updateSingleTask,
    deleteSingleTask
}

