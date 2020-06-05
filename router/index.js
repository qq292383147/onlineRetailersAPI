let express = require('express');
let router = express.Router();
let multer = require("multer");
let upload = multer({dest:'./public/uploads/user/'}).single("file"); // 设置文件存储路径及存储方式
let moreUpload = multer({dest:'./public/uploads/'}).array('file',5);
let userController = require('../controller/userController');

// 首页
// router.get('/', userController.showUserInfo);
router.get('/api/addUser', userController.setUserRegister);

router.get('/api/loginUser', userController.UserLogin);

router.get('/api/updatePwdUser', userController.changePwd);

router.post('/api/uploadUseravatar', upload, userController.uploadUseravatar);

router.post('/api/uploadsMoreImg', moreUpload, userController.uploadsMoreImg);


module.exports = router;