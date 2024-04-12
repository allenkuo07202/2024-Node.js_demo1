// fs (file system)(文件系統)
const fs = require("fs");
fs.writeFile("myFile.txt", "今天天氣不錯", (e) => {
  if (e) throw e;
  console.log("文件已經撰寫完畢");
});

fs.readFile("myFile.txt", "utf8", (e, data) => {
  if (e) throw e;
  console.log(data);
});
