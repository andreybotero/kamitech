/* var i = 0;
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

    document.getElementById("T" + i).innerHTML = "";
    document.getElementById("D" + i).innerHTML = "";
    document.getElementById("DD" + i).innerHTML = "";
    document.getElementById("A" + i).innerHTML = "";
    document.getElementById("bt" + i).hidden = true;
    var menos = i - 1;
    i = menos;
    }*/

    var i = 0;

    function adicionar() {
        i++;
    
        var titulo = document.getElementById("Titulo").value;
        document.getElementById("Titulo").value = '';
        var title = document.createElement("p");
        title.setAttribute("id", "T" + i);
        title.innerHTML = titulo;
    
        var data = document.getElementById("Data").value;
        document.getElementById("Data").value = '';
        var date = document.createElement("p");
        date.setAttribute("id", "D" + i);
        date.innerHTML = data;
    
        var des = document.getElementById("Descricao").value;
        document.getElementById("Descricao").value = '';
        var descri = document.createElement("p");
        descri.setAttribute("id", "DD" + i);
        descri.innerHTML = des;
    
        var autor = document.getElementById("Autor").value;
        document.getElementById("Autor").value = '';
        var creater = document.createElement("p");
        creater.setAttribute("id", "A" + i);
        creater.innerHTML = autor;
    
        var button = document.createElement("button");
        button.innerHTML = "Desfazer";
        button.setAttribute("id", "bt" + i);
        button.setAttribute("onclick", "desfazer(" + i + ")");
    
        var div = document.createElement("div");
        div.setAttribute("id", "div" + i);
    
        div.appendChild(title);
        div.appendChild(date);
        div.appendChild(descri);
        div.appendChild(creater);
        div.appendChild(button);
    
        document.body.appendChild(div);
    }
    
    function desfazer(id) {
        var element = document.getElementById("div" + id);
        element.hidden = true;
    }