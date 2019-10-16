function clicar(){
    document.getElementById("agradecimento").innerHTML="<b>Obrigado por clicar</b>";    
}
function redirecionar(){
    window.open("https://ondeeubaixo.com")
    window.location.href="https://ondeeubaixo.com"// ABRE NA MESMA JANELA
}
function trocar(elemento){
    //document.getElementById("mousemove").innerHTML="Obrigado por passar o mouse"
    elemento.innerHTML="Obrigado por passar o mouse"
}
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML="Passe o mouse aqui"
    elemento.innerHTML="Passe o mouse aqui"
}
function load(){
    alert("Pagina Carregada")
}
function funcaoChange(elemento){
    console.log(elemento.value)
}
/*function soma(n1, n2){
    return n1 +n2;
}

function validaIdade(idade){
    var validar;
    if(idade>=18){
        validar=true;
    }
    else{
        validar=false;
    }
    return validar;
}
var idade=prompt("Qual sua idade?")
console.log(validaIdade(idade));
alert (soma(1 ,2))*/



/*var d=new Date();
alert(d.getDate())*/

/*var count;
for(count=0; count<=5; count++){
    console.log(count);
}*/

/*var count=0;
while(count<=5){
    console.log(count)
    alert(count)
    count++;
}*/

/*var idade=prompt("Qual sua Idade?")
if(idade>=18){
    alert("Maior de idade")
}
else{
    alert("Menor de idade")
}*/

/*var frutas=[{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]
console.log(frutas);
alert(frutas[1].nome);*/

/*var fruta= {nome: "maça", cor: "vermelha"};
console.log(fruta.nome)
alert(fruta.cor)*/

/*var lista=["maça", "pera", "laranja"]
lista.push("uva")
console.log(lista)
lista.pop()
console.log(lista)
console.log(lista.length)
console.log(lista.toString())
console.log(lista.join(" "))*/ 

/*var nome="Joabe Ferreira"
var idade=29
var frase="Puts man tu é mó feio"
//alert("Bem Vindo "+nome+" Vc tem "+idade+" anos")
console.log(nome)
console.log(idade)
console.log(frase)
console.log(frase.toUpperCase())*/