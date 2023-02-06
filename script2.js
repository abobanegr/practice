db = openDatabase("r", "0.1", "A list of to do items.", 200000)
if (!db) { alert("Failed to connect to database.") }
db.transaction(function (tx) {
    tx.executeSql("SELECT *, rowid FROM r", [], function (tx, result) {
        for (var i = 0; i < result.rows.length; i++) {
            document.write('<div id="a' + result.rows.item(i)['id'] + '"style="border-bottom:1px solid black;">' + '<b style="font-size:20px; text-decoration: underline">' + "id: " +  result.rows.item(i)['id'] + " </b><b> Имя: " + result.rows.item(i)['label'] + "  Номер телефона: " + '</b>')
            document.write('<b>' + result.rows.item(i)['phone'] + '</b></div></button></br>')
        }
    }, null)
})

setTimeout(function(){
    var del = prompt("Введите id человека, которому уже позвонили", 0)
}, 3000);


db.transaction(function(tx) {
    db.transaction(function(tx) {  
        tx.executeSql('DELETE FROM r WHERE id = ?', [del], null, null)
    })
})