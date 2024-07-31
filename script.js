const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: " Voce gosta de series?",
        alternativas: [
            {
                texto: "Sim, muito!",
                afirmação: "legal, eu tambem"
            },
            {
                texto: "Nao!",
                aafirmação: "nossa !!"
            }
        ]
    },
    {
        enunciado: "Voce assiste muitas series e filmes?",
        alternativas: [
            {
                texto: "Bastante.",
                afirmação: "legal"
            },
            {
                texto: "Pouco",
                afirmação: "ok"
            }
        ]
    },
    {
        enunciado: "Prefere series ou filmes?",
        alternativas: [
            {
                texto: "Series",
                afirmação: "Eu tbm"
            },
            {
                texto: "Filmes.",
                afirmação: "blza"
            }
        ]
    },
    {
        enunciado: "Voce gosta de comer assistindo?",
        alternativas: [
            {
                texto: "nnnnnn.",
                afirmação: "afirmação"
            },
            {
                texto: "ssss.",
                afirmação: "afirmação"
            }
        ]
    },
    {
        enunciado: "Cinema ou em casa? ",
        alternativas: [
            {
                texto: "Cinema.",
                afirmação: "afirmação"
            },
            {
                texto: "Casa.",
                afirmação: "afirmação"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = ""; 

function mostraPergunta() {
   if(atual >= perguntas.length){
        mostraResultado();
        return;
    }   
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = ""; 
    mostraAlternativas();
}
function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
            const afirmacoes = opcaoSelecionada.afirmação
            historiaFinal += afirmacoes + " "; 
            atual++;
            mostraPergunta();
      }

function mostraResultado(){
    caixaPerguntas.textContent = "pelas suas respostas parece que voce é faminto. porque..."
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent ="";
}

mostraPergunta();

