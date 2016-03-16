window.onload = function() {
  // higlight completed quizes
  var storageData = getStorageData("quiz_data");

  for (var i = 0; i < storageData.length; i++) {

    if (storageData[i].status === "passed") {
      document.getElementById(storageData[i].id)
        .className += " quiz-passed";

    } else if (storageData[i].status === "failed") {
      document.getElementById(storageData[i].id)
        .className += " quiz-failed";
    }

  };
}
