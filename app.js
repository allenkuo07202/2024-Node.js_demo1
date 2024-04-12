const http = require("http"); //引入http這個module
// 用http.createServer()創建網頁伺服器，並在createServer()內給callback function with 2 parameters
// 該callback function會自動被Node.js執行
// 此時，會創建request object(代表把http request的內容作成一個object，還外加一些其他的屬性)
// 及response object(代表把http response的內容作成一個object，還外加一些其他的屬性)
const server = http.createServer((req, res) => {
  // console.log(req.headers);
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" }); // 設定header裡面的內容
  // console.log(req.url);// 可根據這個判斷，要顯示給使用者的內容是什麼
  if (req.url == "/") {
    res.write("歡迎來到我的網頁");
  } else if (req.url == "/anotherPage") {
    res.write("這是另一個頁面");
  } else {
    res.write("不存在的頁面");
  }
  res.end();
}); // callback function with 2 parameters

// 只要啟動伺服器，就會聆聽是否有request請求
server.listen(3000, () => {
  console.log("伺服器正在port3000上運行");
});
// 把http request的內容作成一個object，還外加一些其他的屬性
