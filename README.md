![Status do projeto](https://img.shields.io/badge/status-concluído-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Responsivo](https://img.shields.io/badge/layout-responsivo-06D6A0)

Landing page responsiva de uma plataforma fictícia de cursos de programação,
desenvolvida para praticar HTML, CSS e JavaScript.

## Sobre o projeto

A DevStart apresenta cursos de Front-End, Back-End e Full Stack em uma interface
moderna e adaptada para diferentes tamanhos de tela. O projeto também possui
interações com JavaScript para tornar a experiência mais dinâmica.

## Funcionalidades

- Menu de navegação responsivo com menu hambúrguer.
- Alternância entre tema escuro e tema claro.
- Cards de cursos criados dinamicamente a partir de um array JavaScript.
- Animação dos cards quando entram na área visível da página.
- Botões de curso que direcionam o usuário para o formulário de contato.
- Seção de depoimentos com navegação entre os relatos.
- Formulário com validação de nome, e-mail e mensagem.
- Envio da mensagem preenchida para o WhatsApp.
- Layout responsivo para computadores, tablets e celulares.
- Elementos de acessibilidade, como `aria-label` e `aria-expanded`.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Font Awesome
- Intersection Observer API

## Como executar

1. Clone ou baixe este repositório.
2. Abra a pasta `landing2`.
3. Abra o arquivo `index.html` no navegador.

Também é possível utilizar a extensão **Live Server** no Visual Studio Code
para executar o projeto com atualização automática.

## Estrutura do projeto

```text
landing2/
├── img/
│   └── image_b1029b31.jpg
├── index.html
├── landing2.js
├── style.css
└── README.md
```

## Aprendizados praticados

Este projeto foi desenvolvido para praticar:

- Seleção e criação de elementos no DOM.
- Uso de arrays e objetos para organizar dados.
- Eventos de clique e envio de formulário.
- Validação de campos.
- Manipulação de classes com `classList`.
- Variáveis CSS e alternância de temas.
- Media queries para responsividade.
- Animações com CSS.
- Uso do `IntersectionObserver`.
- Construção de URLs com `encodeURIComponent`.

## Observação

O número utilizado no envio para o WhatsApp está configurado no arquivo
`landing2.js`. Para usar outro número, altere a variável
`numeroWhatsApp`.

## Autor

Desenvolvido por **João Pedro** como projeto de prática em desenvolvimento web.
