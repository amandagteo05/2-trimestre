const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: " Voce gosta de comer?"
        alternativas: [
            {
                texto: "Sim, muito!",
                afirmação: "afirmação"
            },
            {
                texto: "Nao!",
                afirmação: "nao, nao gosto"
            }
        ]
    },
    {
        enunciado: "Quanto é 1+1?"
        alternativas: [
            {
                texto: "2000.",
                afirmação: "errado"
            },
            {
                texto: "2",
                afirmação: "certo"
            }
        ]
    },
    {
        enunciado: "B com A fica como?",
        alternativas: [
            {
                texto: "Ba.",
                afirmação: "certo"
            },
            {
                texto: "BU.",
                afirmação: "errado"
            }
        ]
    },
    {
        enunciado: "Voce gosta de brocolis?",
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
        enunciado: "Voce ta na escola hj? ",
        alternativas: [
            {
                texto: "nnnnnn.",
                afirmação: "afirmação"
            },
            {
                texto: "sssss.",
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

mostrapergunta();

