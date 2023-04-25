function alerta (){
    alert("Pokemons carregados!");
}
function mostarPagina (){
    console.log("pagina ativa")
}
let btn = document.querySelector("#button");
btn.onclick =function(){
    alerta();
}
window.onload = function(){
    mostarPagina();
}