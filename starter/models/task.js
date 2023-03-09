//Folder MODEL 
// SETUP for the Schema (structure) we are using in our model
// tool of choice = mongoose


const mongoose = require('mongoose')


//setup a Schema to structure the MongoDB Model 

// Update switch the properties as objects and use build in validators
const TaskSchema = new mongoose.Schema ({
    name: {
            type: String,
            // retruns error if we pass in the object without name property (true = required)
            // alternativly use an ARRAY to send back a message
            // required: true (old)
            required: [true, 'please provide a valid name'],
            //we can trim the value with the property (trim)
            trim: true,
            // and also give a max length
            maxlength: [20, 'max lenghth is 20 characters'],
            minlength: [1,'name has to be at least 1 character'] 
    },

    //also here we can set it as an object and use build in validators
    completed: {
        type: Boolean,
        //required: [true, 'please give a status (true or false)'],
        default: false

    }
})

//adding validation. This is an important topic!
// https://mongoosejs.com/docs/validation.html



//export the Schema for the structure as our model
//now we only have to use the exported model in the controller
// give the model a name and the assign function

module.exports = mongoose.model('Task', TaskSchema)


//https://mongoosejs.com/docs/models.html