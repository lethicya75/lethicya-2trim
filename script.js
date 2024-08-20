const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

    const perguntas = [
        {
            enunciado: "Lewis nao queria renunciar a presidencia, mesmo voce fazendo mais que ele sendo presidente o que voce faz?",
            alternativas: [
                "bate nele!",
                "tenta descobrir algum segredo dele!"
            ]
        },
        {
            enunciado: "Apos isso voce resolve ir beber no bar do gus, chegando la voce escuta um barulho vindo da moita o que voce faz?",
            alternativas: [
                "fica com medo, mas mesmo assim espia.",
                "começa a gravar e vai olhar o que é."
            ]
        },
        {
            enunciado: "quando voce olha dentro da moita voce ve algo horrivel, Lewis com a marnie o que voce faz?++        ",
            alternativas: [
                "começa a rir desesperadamente e ameaça contar para todo mundo.",
                "fala que vai contar para todos."
            ]
        },
        {
            enunciado: "No outro dia, lewis vai te visitar e começa a implorar para voce nao contar para ninguem o que voce faz?",
            alternativas: [
                "pede para ele anunciar que voce vai ser o novo/a presidente.",
                "pede para ele dinheiro e que ele renuncie a presidencia."
            ]
        },
        {
            enunciado: "Apos isso lewis renunciou a presidencia, e voce virou o/a presidente o que voce faz com lewis agora? ",
            alternativas: [
                "continuo ameaçando e zoando ele.",
                "Deixa ele viver feliz."
            ]
        }
    ]
   
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
            const botaoAlternativas = document.createElement("button");
            botaoAlternativas.textContent = alternativa.texto;
            botaoAlternativas.addEventListener("click", function(){
                atual++;
                mostraPergunta();
            })
            caixaAlternativas.appendChild(botaoAlternativas);
    }
mostraPergunta();
function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal = afirmacoes;
    atual++;
    mostraPergunta();
    }

}

mostraPergunta();