var i = 0;
function adicionar() {
    i++
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
    document.getElementById("bt" + i).hidden = false;
}
function remover() {
    if (i > 20) {
        var menos = i - 1;
        i = menos;
    }
}
    document.getElementById("T" + i).innerHTML = "";
    document.getElementById("D" + i).innerHTML = "";
    document.getElementById("DD" + i).innerHTML = "";
    document.getElementById("A" + i).innerHTML = "";
    document.getElementById("bt" + i).hidden = true;
    var menos = i - 1;
    i = menos;
    