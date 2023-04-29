const control = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
//console.log(estatistica)
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

control.forEach( (element) => {
    element.addEventListener("click", (event) => {
        maniplaDados(event.target.dataset.controle, event.target.parentNode);
        //console.log(event.target.parentNode);
        atualizaEstatisticas(event.target.dataset.peca)
    })
})

function maniplaDados(operator, control) {
    const peca = control.querySelector("[data-contador]");
    //console.log(operator);
    //console.log(control);
    if(operator === "-") {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatisticas(peca) {
    //console.log(pecas[peca])
    estatisticas.forEach( (element) => {
        element.textContent = parseInt(element.textContent) + pecas[peca][element.dataset.estatistica];
        //console.log(element.dataset.estatistica)
        //console.log(element.textContent);
    })
}