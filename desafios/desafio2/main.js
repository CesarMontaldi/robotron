// const clique = document.querySelector('#calcular');
// let div = document.createElement('div');

// clique.addEventListener("click", () => {
//     clique.append(div);
//     div.style.marginTop = "1em";
//     div.innerHTML = "Fui clicado";
// })

const elemento = document.querySelector("#calcular");
const resultado = document.querySelector(".resultado");

elemento.addEventListener("click", (evento) => {
    resultado.style.textTransform = "uppercase";
    resultado.style.color = "black";
    resultado.style.fontSize = "32px";
    resultado.innerHTML = "Fui clicado";
    resultado.style.marginRight = "-28px";
    resultado.style.marginTop = "8px";
    resultado.style.backgroundColor = "green";
    resultado.style.padding = "8px";
})