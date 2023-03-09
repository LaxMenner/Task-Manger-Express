//creating the   async wrapper as a middleware function
// we put the try and catch blocks inside the wrapper
const asyncWrapper = (fn) => { 
    return async (req, res, next) => {
        try{
            await fn(req, res, next)
        }catch (error) {
            //pass it to a next middleware which was not set up yet.  ("custom error message")
            next(error)
        }
    }

}
//mit next können wir super die nächste Middleware Funktion abrufen.
// in unserem Fall ist dies die error-handler Function, welcher lediglich eine custom error message ist.

//-------------------------------------------------
// export function as module

module.exports = asyncWrapper





//--------------------------------------------------
//Whats in the app.js EXAMPLE
/* 
const getAllTasks = async (req, res) =>{
    try{
        const tasks = await Task.find({})

        res.status(200).json({ tasks })
    }catch (error) {
        res.status(500).json({ msg: error })
    }
}   
}*/