const request = require("request");
const yargs = require("yargs");
const city = 'delhi';
const argv = yargs
.options({
  address:{
    demand:true,
    alias:'a',
    describe:'enter the city name',
    string:true
  }
})
.help()
.argv;
// console.log(argv.address);
request({
  url:`https://api.openweathermap.org/data/2.5/forecast?q=${argv.address},IN&appid=05d9f1b37e2af6b2c06b48a7096697e1`,
  json:true},(error,response,body)=>{
    // if(!body)
    // {
      console.log("city",body.message);
    // }/

  console.log(JSON.stringify(body,undefined,2));
});
