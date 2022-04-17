const botao = document.querySelector("#botao");
let contador = 0;

function modificaFotosTexto(){
  const imagens = ['anakin1.png', 'anakin21.png', 'anakin3.png', 'vader.png', 'old.png'];
  const textos = ['Escravo', 'Joven Jedi', 'Lord Vader', 'Darth Vader', 'Espirito da Força'];

  let fotosTexto = document.querySelector(".personagem");

  fotosTexto.innerHTML = `<h1>${textos[contador]}</h1>    
  <img src="/Projeto-1-HTML/assets/${imagens[contador]}">`;

  contador++;

  if(contador == imagens.length){
    contador = 0;
  };
  
};

botao.addEventListener("click", modificaFotosTexto);