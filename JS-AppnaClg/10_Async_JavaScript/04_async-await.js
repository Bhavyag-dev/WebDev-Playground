// This function returns a promise after 2 seconds.
function getData(dataId) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log("data", dataId);
      resolve("success");
    }, 2000);
  });
}

// async-await helps us write asynchronous code in a cleaner way.
async function getAllData() {
  console.log("getting data1...");
  await getData(1);

  console.log("getting data2...");
  await getData(2);
}

getAllData();
