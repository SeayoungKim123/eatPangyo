// JavaScript를 사용하여 데이터 동적으로 추가
let table = document.getElementById("resTable");

// Fetch data from the JSON file
fetch('resList.json')
  .then(response => response.json())
  .then(data => {
    // 헤더 행 추가
    var headerRow = table.insertRow(0);
    for (var key in data[0]) {
      var th = document.createElement("th");
      th.innerHTML = key;
      headerRow.appendChild(th);
    }

    // 데이터 행 추가
    data.forEach(function(item, index) {
      var row = table.insertRow(index + 1);
      for (var key in item) {
        var cell = row.insertCell();
        cell.innerHTML = item[key] || "";
      }
    });
  })


