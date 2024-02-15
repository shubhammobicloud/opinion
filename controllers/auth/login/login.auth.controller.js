const User = require('../../../models/user.model')
const bcrypt = require('bcrypt')

const login = async (req,res,next)=>{
    let email = req.body.email;
    let password = req.body.password
    
    try {
        if(!email||!password){
           return res.status(422).json({message:"enter all fields"})
        }
        let user = await User.findOne({email:email})
        if(user){
            let result = await bcrypt.compare(password, user.password)
            if(result){
                res.status(200).json({message:"Login Successful"})
            }
            else{
                res.status(401).json({message:"wrong password"})
            }
        }
        else{
            res.status(422).json({message:"wrong email"})
        }
    } catch (error) {
        next(error)
    }
}

module.exports = login