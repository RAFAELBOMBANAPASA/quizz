const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const barraProgresso = document.querySelector(".barra-progresso-preenchimento");

const perguntas = [
    {
        enunciado: "Em seu primeiro dia na Escola automotiva voce tem que escolher uma area pra se especializar, qual seguimento você iria escolher?",
        alternativas: [
            {
                texto: "Drift.", 
                afirmacao: [
                    "voce gosta de uma corrida mais bonita, que foca mais no visual do que na velocidade,",
                    "voce gosta de perder o controle, mas recupera ele com facilidade,",
                    "jogar o carro de lado te faz se sentir bem, é como se você tivesse dançando com ele,"
                ]
            },
            {
                texto: "F1.",
                afirmacao:[
                    "você gosta de velocidade e de fazer curvas bonitas,",
                    "você vive sua vida no modo 2X, faz as coisas rapido e vive mais rapido ainda,"
                ]
            },
            {
                texto: "Rally.",
                afirmacao: ["você gosta de se sujar, tem a troca de marcha muito rapida, e gosta de fazer trilha.",
                            "você vive a base de adrenalina, qualquer coisa pra voce deve ser radical, o barro faz bem pra você,"
            ]
            } ,
            {
                texto: "Arrancada.",
                afirmacao: ["você não quer apenas velocidade, você quer criar um monstro sobre rodas, um carro com 90% de pegar fogo ou expludir, um automovel com potencia absurda, e provavelmente você gosta de racha de rua, e vai morrer enfiado num poste,",
                            " você quer levantar voo, acha que seu carro é um avião, e não vai parar ate conseguir tirar ele do chão,",
                            "voce quer criar um carro no estilo do carro do filme 'de volta para o futuro', que seja tão rapido que quebre a barreira de som,"
            ]
            }
        ]
    },
    {
        enunciado: "Durante sua primeira aula voce deve escolher seu primeiro veiculo, qual sera ele?",
        alternativas: [
            {
                texto: "nissan silvia.",
                afirmacao: ["você quer um carro que seja baixo e estiloso, não gosta muito de caminhonete mais gosta bastante de fumaça,",
                            "você tem um estilo unico e meio duvidoso, provavelmente estamparia seu carro com estilo de anime,",
                            "você gosta de lugares com curva e gostaria de viajar para o japão,",
            ]
            },
            {
                texto: "ferrari 488 pista spider.",
                afirmacao: ["Você não pede licensa,manda chegar pro lado,é rapido, suas curvas são limpas, mas voce pressisa ter braço, para não perder o controle e matar alguem,",
                            "você gosta de coisas esclusivar, caras e de dificil acesso, não gosta de pessoas que se acham com uma banheira,"
            ]
            },
            {
                texto: "RAM R\T.",
                afirmacao: ["impõem respeito em todo lugar,significa que você não tem medo de se sujar.",
                            "você gosta de erguer o seu carro, deixar ele nas alturas,",
                            "você é do mato, esculta aquela musica dos barões da pisadinha 'eu sou filho do mato, venho da roça, meu pai e vaqueiro, minhas mãos são grosas.',"
            ]
            },
            {
                texto: "Ford Mustang.",
                afirmacao: ["você gosta de torque, muito torque, e acostumado com racha ilegal, e pensa muito em dar fuga da policia, cresceu jogando a franquia Need For Speed.",
                            "você gosta de um belo v8 americano e de muscle car,",
            ]
            }
        ]
    },
    {
        enunciado: "segundo dia, e voce vai modificar seu carro, qual a primeira coisa que voce faz?",
        alternativas: [
            {
                texto: "Erguer o seu carro nas alturas.", 
                afirmacao: "Você não tem medo de altura, impõem respeito e gosta de causar, provavelmete seu carro usa disel."
            },
            {
                texto: "Barra anticavalinho.",
                afirmacao: "você acha que seu carro é uma moto que vai empinar, e provavelmente junto do seu carro tembem tem um para quedas."
            },
            {
                texto: "Body kit", 
                afirmacao: "A aparencia para você vale mais que ser rapido, voce visa perfeição e não pressa."
            },
            {
                texto: "motor.", 
                afirmacao: "você quer potencia custe o que custar, e gosta de barrulho de carro forte."
            },
        ]
    },
    {
        enunciado: "Chega o momento de mecher no seu carro, o que voce preferre?",
        alternativas: [
            {
                texto: "Mecher no carro sozinho.",
                afirmacao: "você sabe o que ta fazendo e mesmo no erro voce mantem a calma e se ajusta a dificuldade."
            },
            {
                texto: "chamar alguem pra te ajudar.",
                afirmacao: "sabe o basico, mas esta sempre aprendendo."
            },
            {
                texto: "mandar pra alguem arrumar pra voce.", 
                afirmacao: "não é muito tecnico e gosta apenas de sentar e dirigir."
            },
        ]
    },
    {
        enunciado: "agora esta sendo marcada sua primeira corrida, escolha sua pista",
        alternativas: [
            {
                texto: "interlagos",
                afirmacao: "você não tem medo de se arriscar, mesmo que qualquer deslize cause sua morte você se mantem calmo."
            },
            {
                texto: "São Paulo International Dragway (SPID).",
                afirmacao: "você gosta muito mais do que so carros, voce gosta de velocidade e adrenalina, gosta de um começo rapido e um fim do mesmo jeito do começo."
            },
            {
                texto: "Circuito Ebisu.",
                afirmacao: "você prefere estilo a velocidade e tem um otimo controle sobre seu carro."
            },
            {
                texto: "Ouninpohja.",
                afirmacao: "você tem braço pra controlar seu carro, velocidade e muito barro embaixo das rodas."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function atualizaBarraProgresso() {
    if (barraProgresso) {
        const porcentagem = (atual / perguntas.length) * 100;
        barraProgresso.style.width = `${porcentagem}%`;
    }
}

function mostraTelaInicial() {
    if (barraProgresso) {
        barraProgresso.style.width = "0%";
    }

    caixaPerguntas.textContent = "Bem-vindo ao Quiz automotivo: começe sua jornada";
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "Neste quiz interativo, você tomará decisões marcantes ao longo da sua vida como piloto de alto padrão";

    // Animação de entrada
    caixaPerguntas.classList.remove("animar-entrada");
    textoResultado.classList.remove("animar-entrada");
    void caixaPerguntas.offsetWidth;
    caixaPerguntas.classList.add("animar-entrada");
    textoResultado.classList.add("animar-entrada");

    const botaoIniciar = document.createElement("button");
    botaoIniciar.textContent = "Iniciar Quiz";
    botaoIniciar.addEventListener("click", iniciarQuiz);
    caixaAlternativas.appendChild(botaoIniciar);
}

function iniciarQuiz() {
    textoResultado.textContent = "";
    mostraPergunta();
}

function mostraPergunta() {
    atualizaBarraProgresso();

    if (atual >= perguntas.length) {
        exibeResultado();
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";

    // Animação de entrada
    caixaPerguntas.classList.remove("animar-entrada");
    caixaAlternativas.classList.remove("animar-entrada");
    void caixaPerguntas.offsetWidth;
    caixaPerguntas.classList.add("animar-entrada");
    caixaAlternativas.classList.add("animar-entrada");

    mostraAlternativas();
}

function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacaoSorteada = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacaoSorteada + " ";
    atual++;
    mostraPergunta();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function exibeResultado() {
    if (barraProgresso) {
        barraProgresso.style.width = "100%";
    }

    caixaPerguntas.textContent = "Resumo da sua corrida";
    caixaAlternativas.textContent = "";
    textoResultado.textContent = historiaFinal;

    caixaPerguntas.classList.remove("animar-entrada");
    textoResultado.classList.remove("animar-entrada");
    void caixaPerguntas.offsetWidth;
    
    caixaPerguntas.classList.add("animar-entrada");
    textoResultado.classList.add("animar-entrada");

    const botaoReiniciar = document.createElement("button");
    botaoReiniciar.textContent = "Jogar Novamente, renasça e mude seu destino";
    botaoReiniciar.addEventListener("click", reiniciarQuiz);
    caixaAlternativas.appendChild(botaoReiniciar);
}

function reiniciarQuiz() {
    atual = 0;
    historiaFinal = "";
    textoResultado.textContent = "";
    mostraTelaInicial();
}

// Inicializa o quiz exibindo a tela inicial
mostraTelaInicial();