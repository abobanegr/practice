var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
const data = document.querySelector('txt')
const butt = document.querySelector('inputbtn')
var val1, val2

btn.onclick = function () {
  modal.style.display = "block";
}
span.onclick = function () {
  modal.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

db = openDatabase("r", "0.1", "A list of to do items.", 200000);
if (!db) { alert("Failed to connect to database."); }

db.transaction(function (tx) {
  tx.executeSql("SELECT COUNT(*) FROM r", [], function (result) { }, function (tx, error) {
    tx.executeSql("CREATE TABLE r (id INTEGER PRIMARY KEY, label TEXT, phone TEXT)", [], null, null);
  })
})

function Aboba() {
  val1 = document.getElementById('ni').value;
  val2 = document.getElementById('pi').value;
  if(val1 == "") {
    alert("Введите Имя")
  } else if(val2 == "") {
    alert("Введите номер телефона")
  } else {
    db.transaction(function (tx) {
    tx.executeSql("INSERT INTO r (label, phone) values(?, ?)", [val1, val2], null, null);
  })
  window.location = './ty.html'
  }
}

