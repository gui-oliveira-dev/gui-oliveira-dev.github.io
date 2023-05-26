const fundamentos = `<h4>Neste módulo eu aprendo toda a base de ferramentas que eu preciso para seguir na carreira de programação, aprendo as ferramentas necessárias para conseguir evolouir nos aprendizados de Front-End e Back-End</h4>
<br>
<br>
<h5>Conteúdos aprendidos até agora:</h5>
<br>
<ul>
  <li>Unix, Shell e git</li>
  <li>Introdução à HTML & Css</li>
  <li>Introdução à JavaScript</li>
  <li>DOM, Eventos e Web Storage</li>
</ul>
<br>
<br>
<h5>Conteúdos a aprender</h5>
<br>
<ul>
  <li>Forms, Flexbox e Responsividade</li>
  <li>Introdução a JS ES6 e Testes Unitários</li>
  <li>Higher Order Functions do JS ES6</li>
</ul>`

const frontEnd = `<h4>Neste módulo, eu vou aprender as técnicas e ferramentas mais atuais para desenvolver um código de front-end que seja rápido, bonito e estável.</h4>
<br>
<br>
<h5>Conteúdos Aprendidos até agora:</h5>
<br>
<ul>
  <li>Módulo ainda Não iniciado</li>
</ul>
<br>
<h5>Conteúdos a aprender</h5>
<br>
<ul>
  <li>Introdução Ao Frontend e JS assíncrono</li>
  <li>Introdução ao React</li>
  <li>Componentes com estado, Forms e eventos em React</li>
  <li>Ciclo de vida de componentes e React Router</li>
  <li>Metodologias ageis</li>
  <li>Testes Automatizados com React</li>
  <li>Gerenciamento de Estado</li>
  <li>Projeto Jogo de trivia</li>
  <li>API e React Hooks</li>
  <li>Projeto App de Receitas</li>
</ul>`

const backEnd = `<h4>Neste módulo, eu vou aprender como desenvolver um código de back-end robusto, limpo, escalável e seguro, dominando o uso de bancos de dados, a construção de APIs com testes automatizados.</h4>
<br>
<br>
<h5>Conteúdos Aprendidos até agora:</h5>
<br>
<ul>
  <li>Módulo ainda Não iniciado</li>
</ul>
<br>
<h5>Conteúdos a aprender</h5>
<br>
<ul>
  <li>Docker</li>
  <li>SQL</li>
  <li>Funções SQL, JOINs e Normalização</li>
  <li>Desenvolvimento com Node.js</li>
  <li>Arquitetura de Software</li>
  <li>ORM e Autenticação com Node.js</li>
  <li>Masterclass</li>
  <li>TypeScript</li>
  <li>Programação orientada a objetos</li>
  <li>Projeto TFC - Trybe Futebol Clube</li>
</ul>`

const cienciaDaComputacao = `<h4>Aqui eu vou aprender os principais conceitos da Ciência da Computação que são aplicados no dia a dia do desenvolvimento de software e como transformar a teoria em prática, analisando algoritmos e escolhendo as melhores estruturas de dados para resolver os problemas!</h4>
<br>
<br>
<h5>Conteúdos Aprendidos até agora:</h5>
<br>
<ul>
  <li>Módulo ainda Não iniciado</li>
</ul>
<br>
<h5>Conteúdos a aprender</h5>
<br>
<ul>
  <li>Python</li>
  <li>Algoritimos</li>
  <li>Estrutura de Dados I</li>
  <li>Estrutura de Dados II</li>
</ul>`



function jscarregado() {
  localStorage.setItem('fundamentos-text', fundamentos)
  localStorage.setItem('frontEnd-text', frontEnd)
  localStorage.setItem('backEnd-text', backEnd)
  localStorage.setItem('cience-text', cienciaDaComputacao)
  
  const initialText = document.querySelector('#text')
  initialText.innerHTML = fundamentos

  
}
window.onload = jscarregado

const fundamentosBtn = document.querySelector('.study1').addEventListener('click', (evento => {
  const texto = document.querySelector('#text')
  texto.innerHTML = localStorage.getItem('fundamentos-text')
  console.log(evento.target);
}))


const frontEndBtn = document.querySelector('.study2').addEventListener('click', (evento => {
  const texto = document.querySelector('#text')
  texto.innerHTML = localStorage.getItem('frontEnd-text')
}))

const backEndBtn = document.querySelector('.study3').addEventListener('click', (evento => {
  const texto = document.querySelector('#text')
  texto.innerHTML = localStorage.getItem('backEnd-text')
}))

const compCienceBtn = document.querySelector('.study4').addEventListener('click', (evento => {
  const texto = document.querySelector('#text')
  texto.innerHTML = localStorage.getItem('cience-text')
}))