let depoimentos = document.querySelectorAll(`.depoimento`)
let btnAnt = document.getElementById(`btn-ant`)
let btnProx = document.getElementById(`btn-prox`)
let btnComecar = document.getElementById('comecar');
let secaoCursos = document.getElementById('subtitulo1');
let mensagem = document.getElementById(`mensagem`)
let nome = document.getElementById(`nome`)
let email = document.getElementById(`email`)
let resposta = document.getElementById(`resposta`)
let formulario = document.getElementById(`formulario-contato`)
let btnTema = document.getElementById('escuro');
const menuHamburger = document.getElementById('menu-hamburger');
const menuLinks = document.getElementById('links');
let indiceAtual = 0

const cursos = [
    {
        nome: `Front-End`,
        descricao: `Aprenda a criar interfaces modernas e interativas para a web usando lógica, design e criatividade.`,
        nivel: `Iniciante`
    },
    {
        nome: `Back-End`,
        descricao: `Aprenda a desenvolver a parte lógica dos sistemas, trabalhando com dados, APIs e arquitetura.`,
        nivel: `Intermediário`
    },
    {
        nome: `Full Stack`,
        descricao: `Una Front-End e Back-End para construir projetos completos, do início ao fim.`,
        nivel: `Avançado`
    }
]

const containerCursos = document.getElementById(`cursos`)

cursos.forEach(curso => {
    const card = document.createElement(`div`)
    card.classList.add(`curso`)
    card.innerHTML = `
        <h2 class="h2">${curso.nome}</h2>
        <p>${curso.descricao}</p>
        <h3>Nível: <span>${curso.nivel}</span></h3>
        <button class="ver" type="button" data-curso="${curso.nome}">Ver curso</button>
    `
    containerCursos.appendChild(card)
})

const cardsCursos = document.querySelectorAll(`.curso`)
const observadorCursos = new IntersectionObserver((entradas, observador) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add(`apareceu`)
        } else {
            entrada.target.classList.remove(`apareceu`)
        }
    })
}, {
    threshold: 0.2
})

cardsCursos.forEach(card => observadorCursos.observe(card))

document.querySelectorAll(`.ver`).forEach(botao => {
    botao.addEventListener(`click`, () => {
        mensagem.value = `Tenho interesse no curso de ${botao.dataset.curso}. Gostaria de receber mais informações.`
        document.getElementById(`contato-secao`).scrollIntoView({
            behavior: `smooth`
        })
        mensagem.focus()
    })
})


function mudarDepoimento(novoIndice) {
    depoimentos[indiceAtual].classList.remove(`ativo`)
    if(novoIndice >= depoimentos.length) {
        indiceAtual = 0
    } else if(novoIndice < 0) {
        indiceAtual = depoimentos.length - 1;
    } else {
        indiceAtual = novoIndice
    }
    depoimentos[indiceAtual].classList.add(`ativo`)
}

btnAnt.addEventListener(`click`, ()=> {
    mudarDepoimento(indiceAtual - 1)
})

btnProx.addEventListener(`click`, ()=> {
    mudarDepoimento(indiceAtual + 1)
})

btnComecar.addEventListener('click', function() {

    secaoCursos.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
    });
})

formulario.addEventListener(`submit`, (evento) => {
    evento.preventDefault()

    if(nome.value.trim() === `` || email.value.trim() === `` || mensagem.value.trim() === ``) {
        resposta.classList.add(`alerta`)
        resposta.classList.remove(`verde`)
        resposta.textContent = `Insira seu nome, e-mail e mensagem para enviar`
    } else {
        resposta.classList.remove(`alerta`)
        resposta.classList.add(`verde`)
        resposta.textContent = `A sua Mensagem foi enviada com Sucesso`

        const textoWhatsApp = `Olá! Meu nome é ${nome.value.trim()} e meu e-mail é ${email.value.trim()}. ${mensagem.value.trim()}`
        const numeroWhatsApp = `5541999456667`
        const linkWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(textoWhatsApp)}`

        window.open(linkWhatsApp, `_blank`)
    }
})

if (btnTema) {
    btnTema.addEventListener('click', function() {
        
        document.body.classList.toggle('light-mode');
        
        
        const icone = btnTema.querySelector('i');
        if (icone) {
            if (document.body.classList.contains('light-mode')) {
                icone.className = "fa-solid fa-moon fa-flip"; 
            } else {
                icone.className = "fa-solid fa-circle-half-stroke fa-flip"; 
            }
        }
    });
}

menuHamburger.addEventListener(`click`, ()=> {
    const menuAberto = menuLinks.classList.toggle(`active`);
    menuHamburger.setAttribute(`aria-expanded`, menuAberto);

    const icone = menuHamburger.querySelector(`i`);
    icone.classList.toggle(`fa-bars`);
    icone.classList.toggle('fa-xmark');
});

document.querySelectorAll(`#links a`).forEach(link => {
    link.addEventListener(`click`, () => {
        menuLinks.classList.remove(`active`)

        const icone = menuHamburger.querySelector(`i`);
        icone.classList.add(`fa-bars`);
        icone.classList.remove(`fa-xmark`);
    })


})