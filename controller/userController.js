let userModel = require('../model/userModel');
let util = require('../util/verificationconfig');
let fs = require('fs');
module.exports = {
  // 注册功能
  setUserRegister: (req,res)=> {
    let newUser = req.query;

    if(util.checkUserPwd(newUser.user_name,newUser.user_pwd)){
      return res.json({ "code": 500, "msg": '用户名或密码不能为空' })
    }else{
      let returnedTarget = Object.assign({},newUser,{
        "user_id":util.setOnlyId(),
        "user_pwd": util.setMD5(newUser.user_pwd),
        "level_id": 3,
        "creatTime": util.settime(util.gettime())
      })
      // 查询用户是否存在
      userModel.changUserPresence(newUser.user_name,(err,data)=>{
        if(err) return res.json({ "code":0, "msg": '操作错误，请重试' })

        if(data!=''){
          return res.json({
            'code':200,
            'msg':'用户名已被注册！'
          })
        } else{
          userModel.addUser(returnedTarget,(err,data)=>{
            if(err) return res.json({ "code":0, "msg": '操作错误，请重试' })
      
            res.json({
              "code": 200,
              "msg": '注册成功',
              "data":data
            })
          })
        }
      })
    }
  },
  // 验证登录
  UserLogin: (req, res) => {
    let oldUser = req.query;
    if(util.checkUserPwd(oldUser.user_name,oldUser.user_pwd)){
      return res.json({ "code": 500, "msg": '用户名或密码不能为空' })
    }
    // oldUser.user_pwd = util.setMD5(oldUser.user_pwd)
    userModel.getUser(oldUser,(err, data) => {
      if (err) throw err
      if(data==''){
        res.json({
          "code": 301,
          "msg":"用户名或密码有误"
        })
      }else{
        res.json({
          "code": 200,
          "msg": '用户登录成功',
          "data": data
        })
      }
    })
  },
  // 修改密码
  changePwd: (req,res) =>{
    let str = req.query;
    let newUser = [str.user_pwd,str.user_name];
    userModel.changUserPresence(newUser[1],(err,data)=>{
      if(err) return res.json({'code':0,'msg':'操作错误，请重试'})

      if(data==''){
        return res.json({
          'code':200,
          'msg':'用户不存在！'
        })
      }else{
        userModel.updatePwd(newUser,(err,data)=>{
          if(err) return res.json({'code':0,'msg':'操作错误，请重试'})
          res.json({
            'code':200,
            'msg':'修改成功！'
          })
        })
      }
    })
  },
  // 上传用户头像（单上传）
  uploadUseravatar:(req,res)=>{
    let user_img = `${req.query.user_id}.jpg`;
    let file = req.file;
    res.set({
      'content-type':'application/json;charset="utf-8"'
    })
    
    try {
      if(file == undefined){
        return res.json({
          'code': 'error',
          'msg': '上传文件不能为空!'
        })
        
      } else{
        // 将名字修改成：用户id
        fs.renameSync(`./public/uploads/user/${file.filename}`,
          `./public/uploads/user/${user_img}`);
        
        // if(err) throw err
        res.json({
          "code":200,
          'msg': '上传成功'
        })
        res.send(file);
      }
    } catch (error) {
      throw error
    }
  },
  // 批量上传多个图片
  uploadsMoreImg: (req,res) =>{
    console.log(req);
    if( files == undefined ) {
      return res.json({
        'code': 'error',
        'msg': '上传文件不能为空!'
      })
    }else{
      // for(var i in req.files){
      //   res.set({
      //     'content-type':'application/json;charset="utf-8"'
      //   })
      // }
    }
  }

}
