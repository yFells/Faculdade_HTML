
function lista() {
for(var i = 0; i<filmes.length;i++){
    document.getElementById("u").innerHTML += "<div class='titulos'>"+filmes[i].titulo+"<div>"
    document.getElementById("u").innerHTML += "<div class='genero'>"+filmes[i].genero+"<div>"
    document.getElementById("u").innerHTML += "<div class='duracao'>"+filmes[i].duracao+"<div>"
}
}

var filmes = [
    {
        "titulo":"Sexxxta feira 13","duracao":"2h30m","genero":"terror"},
    {   
        "titulo":"a hora do pesadelo","duracao":"2h10m","genero":"terror"},
    {
        "titulo":"panico","duracao":"2h20m","genero":"terror"}
];

console.log(filmes)