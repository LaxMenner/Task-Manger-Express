// https://expressjs.com/de/guide/error-handling.html


//creating own error handler

const errorHandlerMiddleware = (err, req, res, next) => {
    return res.status(500).json( { msg: err })
  }

  // we received an error! WHY? didnt export the module

  module.exports = errorHandlerMiddleware