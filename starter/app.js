//console.log('Task Manager App')

//connext the connect.js with the app.js


const express = require('express');
const app = express();
const routerTasks = require('./routes/tasks') //import the router and import the middleware
const connectDB = require('./DB/connect')
//in order to acces the package we have to require the 'dontenv'
require('dotenv').config()

//import the notFound middleware function
const notFound = require ('./middleware/not-found')
const errorHandlerMiddleware = require ('./middleware/error-handler')


//use static files in EXPRESS //middleware
app.use(express.static('./public'))

//middleware
app.use(express.json())


app.get('/hello', (req,res) =>{
    res.status(200).send('GET request works Task Manager Project')})
 
    

//routes
app.use('/api/v1/tasks', routerTasks)   
app.use(notFound)
app.use(errorHandlerMiddleware) //pass in the errorhandler



// app.get('/api/v1/tasks')                - get all tasks
// app.post('/api/v1/tasks')               - create a newtask
// app.get('/api/v1/tasks/:id')            - get a single task
// app.patch('api/v1/tasks/:id')           - update a single task
// app.delete('/api/v1/tasks/:id')         - delete a single task




// Server Setup *Update / first we check if the DB Connection is ready and then we listen for the assigned Port
//-------------------------------------------------------------------------------------------------------------------------
const PORT = 5000;

//only if the connectionDB is successfull then we are going to spin up the server

//since the connectDB returns a promis, I can set this function to ASYNC and that way of course we can use await keyword
// *usefull:*  set the function in try and catch block so we can handle error messages

const startServer = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        //create server only if connectDB is ok
        app.listen(PORT, console.log(`Server is listeinig on Port: ${PORT}...`))
    } catch (error) {
        console.log(error)
    }
}

//now we invoked the start function
startServer()


// *Previous way to start the Server
// //create server
// app.listen(PORT, ()=>{
//     console.log(`Server is listeinig on Port: ${PORT}...`)
// })
  