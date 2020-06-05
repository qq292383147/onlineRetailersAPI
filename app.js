let express = require('express');
let app = express()
let router = require('./router');
let bodyParser = require('body-parser')

app.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if(req.method == 'OPTIONS'){
    res.send(200);
  }else{
    next(); //让options请求快速返回
  }
});

app.use('/node_modules', express.static('node_modules'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(router)


app.listen(1314, () => {
  console.log(`启动服务器成功！`+`http://127.0.0.1:1314`);
})
