document.write("<h1>Executando script2.js</h1> ");
document.write("Esse script está em um arquivo externo ");
document.write("Referenciando no fim do body do HTML");

function mudarCor(novaCor) {
    var x = document.getElementById("demo");
    x.style.color = novaCor;
}