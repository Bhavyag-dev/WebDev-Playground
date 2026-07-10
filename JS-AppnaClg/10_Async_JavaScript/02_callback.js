function getData(dataId, getNextData) {
  setTimeout(function () {
    console.log("data", dataId);

    if (getNextData) {
      getNextData();
    }
  }, 2000);
}

getData(1, function () {
  getData(2, function () {
    getData(3);
  });
});
