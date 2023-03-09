//connect our database to the server

const mongoose = require('mongoose')




const connectDB = (url) => {
    return mongoose.connect(url, { 
        useNewUrlParser: true, 
        useCreateIndex: true, 
        useFindAndModify: false, 
        useUnifiedTopology: true,
    })

}


module.exports = connectDB

//they have to removed in order to resctructre the code. We want the mongoose to invoked in the app.js
    // .then(()=>console.log('CONNECTED TO THE DB...'))
    // .catch((err)=>console.log(err))
