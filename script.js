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
                afirmacao: "afirmação"
            },
            {
                texto: "Nao!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Quanto é 1+1?"
            {
                texto: "2000.",
                afirmacao: "afirmação"
            },
            {
                texto: "2",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "B com A fica como?",
        alternativas: [
            {
                texto: "Ba.",
                afirmacao: "afirmação"
            },
            {
                texto: "BU.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Voce gosta de brocolis?",
        alternativas: [
            {
                texto: "nnnnnn.",
                afirmacao: "afirmação"
            },
            {
                texto: "ssss.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Voce ta na escola hj? ",
        alternativas: [
            {
                texto: "nnnnnn.",
                afirmacao: "afirmação"
            },
            {
                texto: "sssss.",
                afirmacao: "afirmação"
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
            const afirmacoes = opcaoSelecionada.afirmacoes; /* mudar para opcaoSelecionada.afirmacao*/
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
function respostaSelecionada(opcaoSelecionada){
            const afirmacoes = opcaoSelecionada.afirmacao;
            historiaFinal = afirmacoes;
            atual++;
            mostraPergunta();
      }
mostraPergunta();
