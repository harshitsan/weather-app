const request = require("request");
const getData =(city)=>{
  return new Promise((resolve,reject)=>{
    request({
      url:`https://api.openweathermap.org/data/2.5/forecast?q=${city},IN&appid=05d9f1b37e2af6b2c06b48a7096697e1`,
      json:true},(error,response,body)=>{
      if(error)
        reject("sorry cannot connect to server");
      else if(body.cod==="404")
        reject(body.message, "try again !");
      else
        resolve(`temperature is ${body.list[0].main.temp}`);
      });
  });
};
// getData("delhi");
  module.exports={
    getData
  }
// console.log(module.exports);

//nice!
