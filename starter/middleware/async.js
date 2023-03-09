//creating the   async wrapper as a middleware function

const asyncWrapper = (fn) => { 
    return async (req, res, next) => {
        try{
            await fn(req, res, next)
        }catch (error) {
            next (error)
        }
    }

}


//-------
// export function as module

module.exports = asyncWrapper