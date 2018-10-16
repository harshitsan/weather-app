let getPromise = (a,b)=>{
  return new Promise((resolve,reject)=>{
      if(typeof a ==='number' && typeof b ==='number' )
      resolve(a+b);
      else reject("enter the numbers");
  })
}

getPromise(12,'13').then((e)=>{
    console.log(`success: ${e}`);
    return getPromise(e,33);
},(error)=>{
    console.log(`Error: ${error}`);
    return getPromise('2',33);    
}).then((e)=>{
  console.log(`success: ${e}`);
},(error)=>{
    console.log(`Error: ${error}`);
});

// let somePromise = new Promise((resolve,reject)=>{
//   resolve("Everything is perfect");
//   reject("this is a error");
// })
// somePromise.then((e)=>{
//   console.log(`success: ${e}`);
// },(error)=>{
//   console.log(`Error: ${error}`);
// })
// // console.log(somePromise);
