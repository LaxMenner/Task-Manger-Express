//set up the routes for tasks
const express = require('express');
const router = express()
//import the functions from the controller (logic)
const { getAllTasks, 
        getSingleTask, 
        updateSingleTask, 
        deleteSingleTask, 
        createTask} 
= require('../controller/tasks') 


//call the functions in two ways

// router.route('/').get(getAllTasks)
// router.route('/').post(createTask)
// router.route('/:id').get(getSingleTask)
// router.route('/:id').patch(updateSingleTask)
// router.route('/:id').delete(deleteSingleTask)


//a better way

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getSingleTask).patch(updateSingleTask).delete(deleteSingleTask)


module.exports = router
