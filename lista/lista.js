var i = 1;
function adicionar() {
    var titulo = document.getElementById("Titulo").value;
    document.getElementById("Titulo").value = '';
    document.getElementById("T" + i).innerHTML = titulo;
    var data = document.getElementById("Data").value;
    document.getElementById("Data").value = '';
    document.getElementById("D" + i).innerHTML = data;
    var des = document.getElementById("Descricao").value;
    document.getElementById("Descricao").value = '';
    document.getElementById("DD" + i).innerHTML = des;
    var autor = document.getElementById("Autor").value;
    document.getElementById("Autor").value = '';
    document.getElementById("A" + i).innerHTML = autor;

    i++
}