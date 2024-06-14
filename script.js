const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas= [
    {
        enunciado: "A inteligência artificial é uma nova tecnologia em constante evolução, o que você acha disso?",
        alternativas: [
            "Acho maravilhoso!",
            "Tenho receio do que pode se tornar."
        ]
    },
    {
        enunciado: "Vocễ acredita que a IA trará mais benefícios ou riscos à sociedade? ",
        alternativas: [
            "Mais benefícios, acredito que a IA tem grande potêncial de ajuda.",
            "Mais riscos, não tenho confiança do que a IA pode se tornar.",
            "Não tenho uma opinião formada"
        ]
    },
    {
        enunciado: "Em quais áreas você acha que a IA terá maior impacto nos próximos anos?",
        alternativas: [
            "Nas áreas da educação e entretenimento.",
            "Nas áreas de segurança e saúde."
        ]
    },
    {
        enunciado: "Qual sua opinião sobre o uso da IA para diagnósticos médicos?",
        alternativas: [
            "Muito favorável, quando usado por profissionais da área da saúde.",
            "Não acho que seja uma boa idéia, não confio nos diagnósticos"
        ]
    },
    {
        enunciado: "Qual sua preocupação com relação à IA",
        alternativas: [
            "A falta de privacidade de dados e segurança.",
            "Desemprego e desigualdade econômica"
        ]
    },
];
let atual = 0;
let perguntaAtual;

function mostraPergunta (){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas (){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
    
}
mostraPergunta();