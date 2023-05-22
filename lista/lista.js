var i = 0;

function adicionar() {
    i++;

    var titulo = document.getElementById("Titulo").value;
    document.getElementById("Titulo").value = '';
    var title = '<p id="T' + i + '">' + titulo + '</p>';

    var data = document.getElementById("Data").value;
    document.getElementById("Data").value = '';
    var date = '<p id="D' + i + '">' + data + '</p>';

    var des = document.getElementById("Descricao").value;
    document.getElementById("Descricao").value = '';
    var descri = '<p id="DD' + i + '">' + des + '</p>';

    var autor = document.getElementById("Autor").value;
    document.getElementById("Autor").value = '';
    var creater = '<p id="A' + i + '">' + autor + '</p>';

    var button1 = '<button id="bt1' + i + '" onclick="desfazer(' + i + ')">Desfazer</button>';
    var button2 = '<button id="bt2' + i + '" onclick="editar(' + i + ')">Editar</button>';

    var tudo = title + date + descri + creater + button1 + button2;

    var div = '<div id="div' + i + '">' + tudo + '</div>';

    document.body.innerHTML += div;
}

function desfazer(id) {
    var divs = document.getElementById("div" + id);
    divs.hidden = true;
}

function editar(id) {
    var divs = document.getElementById("div" + id);
    divs.hidden = true;
    
    i++;

    var titulo = document.getElementById("Titulo").value;
    document.getElementById("Titulo").value = '';
    var title = '<p id="T' + i + '">' + titulo + '</p>';

    var data = document.getElementById("Data").value;
    document.getElementById("Data").value = '';
    var date = '<p id="D' + i + '">' + data + '</p>';

    var des = document.getElementById("Descricao").value;
    document.getElementById("Descricao").value = '';
    var descri = '<p id="DD' + i + '">' + des + '</p>';

    var autor = document.getElementById("Autor").value;
    document.getElementById("Autor").value = '';
    var creater = '<p id="A' + i + '">' + autor + '</p>';

    var button1 = '<button id="bt1' + i + '" onclick="desfazer(' + i + ')">Desfazer</button>';
    var button2 = '<button id="bt2' + i + '" onclick="editar(' + i + ')">Editar</button>';

    var tudo = title + date + descri + creater + button1 + button2;

    var div = '<div id="Div' + i + '">' + tudo + '</div>';

    document.body.innerHTML += div;
}
