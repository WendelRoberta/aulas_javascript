//var nome = "Wendel Roberta";
//var idade = 25;
//alert(nome + " tem " + idade + "anos");

//var n1 = 5;
//var n2 = 3;
//console.log(n1 * n2);
//console.log(nome);
//var frase = "Japão é o mellhor time do mundo"

//console.log(frase.toLowerCase());
//alert(frase.replase("Japão", "Brasil"));

//var lista = ["maça", "pera", "laranja"];
//lista.push("uva");
//lista.pop();
//console.log(lista.length);
//console.log(lista.toString());
//console.log(lista.join(" - "));
//console.log(lista.reverse());

/*var fruta = { nome: "maça", cor: "vermelha" };
console.log(fruta.nome);
alert(fruta.nome);*/

/*var idade = prompt("Qual sua idade");
if (idade >= 18) {
    alert("maior de idade");
} else {
    alert("menor de idade");
}*/

/*var count = 0;
while (count <= 5) {
    console.log(count);
    //alert(count);
    count++;
}*/

/*var count;
for (count = 0; count <= 5; count++) {
    console.log(count);
}*/

/*var d = new Date();
console.log(d.getFullYear());
console.log(d.getMonth() + 1);
console.log(d.getMinutes());*/

/*function soma(n1, n2) {
    return n1 + n2;
}
alert(soma(5, 10));*/

//var validar = 0; variavel global

function validaIdade(idade) {
    var validar; //variavel local
    if (idade >= 18) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}
var idade = prompt("Qual sua idade?");
// validaIdade(idade) usado quando a variavel é global
console.log(validaIdade(idade)); //chamar apenas o validar quando a variavel for global