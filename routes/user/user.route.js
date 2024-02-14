const multer = require('multer');
const path = require('path')
const userController = require('../../controllers/user/main.user.controller');

const userRoute = require('express').Router();

const storage = multer.diskStorage({
    destination:function (req, file,cb){
        cb(null, path.join('assets','profileImg'))
    },
    filename: function(req,file,cb){
        const uniqueString = Date.now()+'-'+Math.round(Math.random());
        cb(null, file.fieldname + '-' + uniqueString + path.extname(file.originalname));
    }
})

const upload = multer({storage:storage})

userRoute.post('/create', upload.single("profileImg"), userController.create);

module.exports = userRoute;