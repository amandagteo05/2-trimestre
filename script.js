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
                afirmação: "gosta de series. "
            },
            {
                texto: "Nao!",
                aafirmação: "nao gosta de series.  !!"
            }
        ]
    },
    {
        enunciado: "Voce assiste muitas series e filmes?",
        alternativas: [
            {
                texto: "Bastante.",
                afirmação: "assiste bastante. "
            },
            {
                texto: "Pouco",
                afirmação: "assiste pouco. "
            }
        ]
    },
    {
        enunciado: "Prefere series ou filmes?",
        alternativas: [
            {
                texto: "Series",
                afirmação: "prefere series. "
            },
            {
                texto: "Filmes.",
                afirmação: "prefere filmes. "
            }
        ]
    },
    {
        enunciado: "Voce gosta de comer assistindo?",
        alternativas: [
            {
                texto: "nnnnnn.",
                afirmação: "n gosta de comer assistindo. "
            },
            {
                texto: "ssss.",
                afirmação: "gosta de comer assistindo. "
            }
        ]
    },
    {
        enunciado: "Cinema ou em casa? ",
        alternativas: [
            {
                texto: "Cinema.",
                afirmação: "prefere cinema. "
            },
            {
                texto: "Casa.",
                afirmação: "prefere assistir em casa. "
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
    caixaPerguntas.textContent = "pelas suas respostas parece que voce; "
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent ="";
}

mostraPergunta();

