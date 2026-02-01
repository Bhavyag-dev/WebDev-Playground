
// function asyncFuction() {
//   return new Promise ((resolve, reject) => { 
//     setTimeout(() => {
//       console.log("data1");
//       resolve("Success");
//     }, 4000);
//   });
// }

// function asyncFuction2() {
//   return new Promise ((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data2");
//       resolve("Success");
//     }, 4000);
//   });
// }

// console.log("fetching data1....");
// let p1 = asyncFuction();
// p1.then((res) => {
//   console.log(res);
// })

// console.log("fetching data2....");
// let p2 = asyncFuction2();
// p2.then((res) => {
//   console.log(res);
// })


//promise chain
// const getPromise =() => {
//   return new Promise((resolve, reject) =>{
//   console.log("I am a promise");
//   resolve("success");
// });
// };
// let promise = getPromise();
// promise.then(() => {
//   console.log("promise fulfiiled");
// });


// function getData(dataId, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data", dataId);
//       resolve("success");
//       if (getNextData) {
//         getNextData();
//       }
//     }, 5000);
//   })
// }

