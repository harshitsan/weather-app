const yargs = require("yargs");
const weather = require("./weather.js");

const argv = yargs
.options({
  city:{
    demand:true,
    alias:'c',
    describe:'enter the city name',
    string:true
  }
})
.help()
.alias('help','h')
.argv;
// console.log(module.exports);

weather.getData(argv.city).then((weather)=>{
  console.log(weather);
},(errorMessage)=>{
  console.log("error:",errorMessage);
}).catch((e)=>{
  console.log("there are errorss");
})
// weather.getData(argv.city,(error,result={})=>{
  // if(error)
  // console.log(error);
  // else
  // console.log(JSON.stringify(result,undefined,2));
// });
