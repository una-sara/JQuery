/*Server.js
  创建一个最简单的nodejs http服务端*/
//引入http模块——专门用于创建http服务
const http=require("http");
const url=require("url");
//用http模块创建一个http服务端程序
//可接受其他地方发来的http请求
http.createServer((req,res)=>{
  //每收到一次请求，就自动执行回调函数
  //req是封装请求信息的对象
  // 比如：获得客户端参数
  //res是封装响应功能的对象
  // 可向客户端写回响应结果
  //url:"http://localhost:3000?callback=doit"
  req.url=url.parse(req.url,true)
  /*req.url:{
    protocol:http,
    host:localhost:3000,
    port:3000,
    ...,
    query:{
      callback:doit
    }
  }*/
  var fun=req.url.query.callback;
  console.log(fun);//doit
  var weather="晴 -10~-2 from dong";
  //res.write(weather);
  setTimeout(function(){
    res.write(`${fun}('${weather}')`)
    res.end();//结束写入响应内容，并返回响应
  },6000);
}).listen(3000,function(){
  console.log("服务端已启动，监听3000端口...");
});
//终端中: node server.js
//浏览器中测试: http://同桌IP:3000
