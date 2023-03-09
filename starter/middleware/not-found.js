//custom made error functions as middleware 
const status = 404;
const notFound = (req, res) => {
    res.status(status).send(` ${status} Route does not exits`)
}


//--------------------------------------------------
//export the module 
module.exports = notFound