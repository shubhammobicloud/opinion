const errorHandler = (error, req,res,next)=>{
    if (!error.status) error.status = 400; 
    if (!error.message) error.message = "internal Server Error"
    res.status(error.status).json({
        status:"error",
        message: error.message
    })
    console.log(error)
}

module.exports = errorHandler;