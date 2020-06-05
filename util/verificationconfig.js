const silly = require('silly-datetime');
let md5 = require('blueimp-md5');

module.exports = {
  /* 验证用户名和密码 */
  checkUserPwd: function (userName, userPwd) {
    if (userName == '' || userPwd == '') {
      return true;
    }
    return false;
  },
  /* 获取时间戳 */
  gettime: function () {
    return (new Date()).getTime();
  },

  /* 将时间戳转换成时间 */
  settime: function (time) {
    return silly.format(new Date(time), "YYYY-MM-DD HH:mm:ss")
  },
  /* 随机数1000-9999 */
  setRandom: function () {
    return Math.floor(Math.random() * (9999 - 1000) + 1000);
  },
  /* 创建唯一ID */
  setOnlyId: function () {
    return this.setRandom() + `${this.gettime()}`;
  },
  /* 生成MD5加密算法 */
  setMD5: (password) => {
      return md5(password);
  },
  getMD5: (password) => {
    return 
  }
}