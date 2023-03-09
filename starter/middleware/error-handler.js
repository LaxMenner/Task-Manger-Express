// https://expressjs.com/de/guide/error-handling.html


//creating own error handler

const errorHandlerMiddleware = (err, req, res, next) => {
    //console.log(err)
    return res.status(err.status).json ({msg: err.message})
  }

  // we received an error! WHY? didnt export the module

  module.exports = errorHandlerMiddleware