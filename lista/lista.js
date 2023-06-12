var i = 0;
var certos = 0;
var removenovo = i - 3;
var text1 = '<h1 class="result"> Título:    </h1>';
var text2 = '<h1 class="result"> Data:      </h1>';
var text3 = '<h1 class="result"> Descrição: </h1>';
var text4 = '<h1 class="result"> Autor:     </h1>';

function adicionar() {

    i++
    document.getElementById("fo").style.display = "none";

    var titulo = document.getElementById("Titulo").value;
    document.getElementById("Titulo").value = '';
    var title = ' <div id="geral"> <div id="infos"> '+ text1 + '<p id="T' + i + '" class="paragrafos">' + titulo + '</p>';

    var data = document.getElementById("Data").value;
    document.getElementById("Data").value = '';
    var date =  text2 +'<p id="D' + i + '" class="paragrafos">' + data + '</p>';

    var des = document.getElementById("Descricao").value;
    document.getElementById("Descricao").value = '';
    var descri = text3 + '<p id="DD' + i + '" class="paragrafos">'+  des + '</p>';

    var autor = document.getElementById("Autor").value;
    document.getElementById("Autor").value = '';
    var creater = text4 + '<p id="A' + i + '" class="paragrafos">'+  autor + '</p> </div>';

    var button1 = '<div id="div_button"> <button class="edit_desf" id="bt1' + i + '" onclick="desfazer(' + i + ')">Desfazer</button>';
    var button2 = '<button class="edit_desf" id="bt2' + i + '" onclick="editar(' + i + ')">Editar</button> </div> </div>';

    var tudo = title + date + descri + creater + button1 + button2;

    var div = '<div class="noticia_add" id="div' + i + '">' + tudo + '<p id= "novo' + i +'"> novo </p></div>';
    var footer = '<footer id="fo' + i + '"> <iframe src="../layouts/footer.html" scrolling="no" width="100%" height="340px" frameborder="0"></iframe></footer>'
    document.getElementById("fo").style.display = "none";

    var dataatual = new Date();
    var dataselecionada = new Date(data); 

    if (dataselecionada < dataatual) {
        alert("A data é inválida ou é anterior à data atual.");
    } else {
        certos++;
    }


    document.body.innerHTML += div + footer;
    if (i > 1) {
        var a = i - 1;
        document.getElementById("fo" + a).style.display = "none";
    } 
    var list = [titulo, data, des, autor];

    if (list[0].length == 0) {
        certos ++;
        alert("Está faltando o titulo!");
    }
    if (list[0].length != 0) {
        certos ++;
    }
    if (list[1].length == 0) {
        alert("Está faltando a data!");
    }
    if (list[1].length != 0) {
        certos ++;
    }
    if (list[2].length == 0) {
        alert("Está faltando a descrição!");
    }
    if (list[2].length != 0) {
        certos ++;
    }
    if (list[3].length == 0) {
        certos ++;
        alert("Está faltando o autor!");
    }
    if (list[3].length != 0) {
        certos ++;
    }
    if (certos != 5) {
        document.getElementById("div" + i).style.display = "none";
    }
    certos = 0;
    if ( removenovo > 0 ) {
        document.getElementById("novo" + removenovo).hidden = true;
        }
        
}


function editar(id) {

    var divs = document.getElementById("div" + id);

    var titulo = document.getElementById("Titulo").value;
    document.getElementById("Titulo").value = '';
    var title = ' <div id="textos"><p id="T' + i + '" class="paragrafos">' + titulo + '</p>';

    var data = document.getElementById("Data").value;
    document.getElementById("Data").value = '';
    var date = '<p id="D' + i + '" class="paragrafos">' + data + '</p>';

    var des = document.getElementById("Descricao").value;
    document.getElementById("Descricao").value = '';
    var descri = '<p id="DD' + i + '" class="paragrafos">' + des + '</p>';

    var autor = document.getElementById("Autor").value;
    document.getElementById("Autor").value = '';
    var creater = '<p id="A' + i + '" class="paragrafos">' + autor + '</p> </div>';

    var button1 = '<div id="div_button"> <button class="edit_desf" id="bt1' + i + '" onclick="desfazer(' + i + ')">Desfazer</button>';
    var button2 = '<button class="edit_desf" id="bt2' + i + '" onclick="editar(' + i + ')">Editar</button> </div> ';

    var tudo = title + date + descri + creater + button1 + button2;
    
    var div = '<div id="Div' + i + '">' + tudo + '<p> edited <p/></div>';
}
var edited = '<p id="edited"> edited <p/>';

    if (titulo != "") {
        document.getElementById("T" + id ).innerHTML = title;
    }
    if (data != "") {
        document.getElementById("D" + id ).innerHTML = date;
    }
    if (des != "") {
        document.getElementById("DD" + id ).innerHTML = descri;
    }
    if (autor != "") {
        document.getElementById("A" + id ).innerHTML = creater;
    }
    divs.innerHTML += edited;


function desfazer(id) {
    document.getElementById("div" + id).style.display = "none";
}