// This function simulates getting data after some delay.
function getData(dataId, getNextData) {
  setTimeout(function () {
    console.log("data", dataId);

    // If another function is passed, run it next.
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}

// This is a callback chain.
getData(1, function () {
  getData(2, function () {
    getData(3);
  });
});
