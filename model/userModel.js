let mysql = require('mysql');
let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123',
  database: 'commerce'
});

conn.connect();

module.exports = {
  // 添加用户
  addUser: (newUser, callback) => {
    // console.log(newUser);
    let sql = 'insert into users set ?';
    conn.query(sql, newUser, (err, results) => {
      if (err) throw err
      callback(null, results);
    })
  },
  // 获取用户信息
  getUser: (oldUser, callback) => {
    let sql = 'select user_id,user_name,user_age,user_gender,user_address,user_avatar,level_id from users where user_name=? and user_pwd=?';
    conn.query(sql, [oldUser.user_name,oldUser.user_pwd], (err, results) => {
      if (err) return callback(err, null);
        callback(null, results);
    });
  },
  // 查询用户是否存在
  changUserPresence: (user,callback) =>{
    let sql = 'select * from users where user_name=?';
    conn.query(sql,user,(err,results) => {
      if(err) return callback(err,null);
      callback(null,results);
    })
  },
  // 修改密码
  updatePwd: (user,callback)=>{
    let sql ='UPDATE users SET user_pwd=? where user_name=?';
    conn.query(sql,user,(err,results)=>{
      if(err) return callback(err,null)
      callback(null,results)
    })
  }

}