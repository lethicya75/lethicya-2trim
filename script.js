const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Lewis estáva na casa da marnie"
    ,
        alternativas: [
            {
                texto: "entrar escondido e assustar eles",
                afirmacao: "positivo"
            },
            {
                texto:  "jogar uma bomba na porta",
                afirmacao: "negativo"
            }
        ]
    },
    {
        enunciado: "Lewis estáva atras da moita com a marnie, e você vê tudo, o que voce faz?",
        alternativas: [
            {
                texto: "grava e mostra para todo mundo?",
                afirmacao: "positivo"
            },
            {
                texto: "ou cobre ouro para não falar para ninguem?",
                afirmacao: "negativo"
            }
        ]
    },
    {
        enunciado: "Depois de fazer isso lewis fica muito bravo e briga com voce, o que voce faz?
         ",
        alternativas: "positivo"
            {
                texto: "ri da cara dele",
                afirmacao: "positivo"
            },
            {
                texto: "ameaça ele",
                afirmacao: "negativo"
            }
        ]
    },
    {
        enunciado: "apos isso lewis praneja acabar com voce, e voce descobre o que voce faz?",
        alternativas: "negativo"
            {
                texto: "captura ele, e prende ele no porao",
                afirmacao: "positivo"
            },
            {
                texto: "bate nele com uma barra de ferro",
                afirmacao: "negativo"
            }
        ]
    },
    {
        enunciado: "apos isso lewis fica completamente horrorizado e renuncia a presidencia para voce o que voce faz? ",
        alternativas: [
            {
                texto: "aceita com felicidade",
                afirmacao: "positivo"
            },
            {
                texto: "recusa e faz o lewis de empregado o resto da vida",
                afirmacao: "negativo"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultado.style.display = "block";
}

mostraPergunta();