var i = 0;
var edit = 0;
var certos = 0;
var text1 = '<h1 class="result"> Título:    </h1>';
var text2 = '<h1 class="result"> Data:      </h1>';
var text3 = '<h1 class="result"> Descrição: </h1>';
var text4 = '<h1 class="result"> Autor:     </h1>';
var dataarr = [];
var geral = [];


function adicionar() {
    var removenovo = i - 1;
    

    i++
    //document.getElementById("fo").style.display = "none";

    var titulo = document.getElementById("Titulo").value;
    var title = ' <div id="geral"> <div id="infos"> ' + text1 + '<p id="T' + i + '" class="paragrafos">' + titulo + '</p>';

    var inputData = document.getElementById("Data").value;
    dataarr.push(inputData);
    var data = inputData.split("-");
    var dataFormatada = data[2] + "/" + data[1] + "/" + data[0];
    var date = text2 + '<p id="D' + i + '" class="paragrafos">' + dataFormatada + '</p>';

    var des = document.getElementById("Descricao").value;
    var descri = text3 + '<p id="DD' + i + '" class="paragrafos">' + des + '</p>';

    var autor = document.getElementById("Autor").value;
    var creater = text4 + '<p id="A' + i + '" class="paragrafos">' + autor + '</p> </div>';

    var editado = '<p>Editado</p>'

    var button1 = '<div id="div_button"> <button class="edit_desf" id="bt1' + i + '" onclick="desfazer(' + i + ')">Desfazer</button>';
    var button2 = '<button class="edit_desf" id="bt2' + i + '" onclick="editar(' + i + ')">Editar</button> </div> </div>';

    
    if (edit == 1) {
        var tudo = title + date + descri + creater + button1 + button2 + editado;
        var div = '<div class="noticia_add" id="div' + i + '">' + tudo + '</div>';
    }
    else {
        var tudo = title + date + descri + creater + button1 + button2;
        var div = '<div class="noticia_add" id="div' + i + '">' + tudo + '<p id= "novo' + i + '"> novo </p></div>';
    }
    geral.push(div);

    var footer = '<footer id="fo' + i + '"> <iframe src="../layouts/footer.html" scrolling="no" width="100%" height="340px" frameborder="0"></iframe></footer>'
    document.getElementById("fo").style.display = "none";
      
        var dataatual = new Date();
      
        var dataAnterior = new Date(dataatual);
        dataAnterior.setDate(dataAnterior.getDate() - 1);
      
        var dataselecionada = new Date(data);
      
        if (dataselecionada < dataAnterior) {
          document.getElementById("erro2").hidden = false;
        } else if (dataFormatada.length > 10){
            document.getElementById("erro2").hidden = false;
        }
         else {
          certos++;
        }

    document.getElementById("body").innerHTML += geral[i - 1]; 
    document.body.innerHTML += footer;   
    
    if (i > 1) {
        var a = i - 1;
        document.getElementById("fo" + a).style.display = "none";
    }
    var list = [titulo, data, des, autor];

    if (list[0].length == 0) {
        document.getElementById("erro1").hidden = false;
    }
    if (list[0].length != 0) {
        certos++;
    }
    if (list[1].length == 0) {
        document.getElementById("erro2").hidden = false;;
    }
    if (list[1].length != 0) {
        certos++;
    }
    if (list[2].length == 0) {
        document.getElementById("erro3").hidden = false;;
    }
    if (list[2].length != 0) {
        certos++;
    }
    if (list[3].length == 0) {
        document.getElementById("erro4").hidden = false;;
    }
    if (list[3].length != 0) {
        certos++;
    }
    if (certos == 5) {
        document.getElementById("erro1").hidden = true;
        document.getElementById("erro2").hidden = true;
        document.getElementById("erro3").hidden = true;
        document.getElementById("erro4").hidden = true;
    }
    if (certos != 5) {
        
        document.getElementById("div" + i).style.display = "none";
    }
    certos = 0;
    if (i > 2) {
        document.getElementById("novo" + removenovo).innerHTML = "";
    }

     
     console.log(removenovo);

    document.getElementById("botao_add").innerHTML = "Adicione";

    edit=0;
}


function editar(id) {
    edit ++
    var idarr = id - 1;

    document.getElementById("botao_add").innerHTML = "editar";


    document.getElementById("Titulo").value = document.getElementById("T" + id).innerText;

    document.getElementById("Data").value = dataarr[idarr];

    document.getElementById("Descricao").value = document.getElementById("DD" + id).innerText;

    document.getElementById("Autor").value = document.getElementById("A" + id).innerText;

    var divs = document.getElementById("div" + id);



    divs.hidden = true;

}


function desfazer(id) {
    document.getElementById("div" + id).style.display = "none";
}