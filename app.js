// 在package.json裡面，dependencies內的東西，可以直接require
const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: "我是一隻大牛",
    e: "oO",
    T: "U ",
  })
);

// or cowsay.think()
