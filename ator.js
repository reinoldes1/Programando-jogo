//Codigo do Ator

let xAtores = [128, 572];
let yAtores = [366, 366];
let alturaAtores = [30, 60];
let larguraAtores = [30, 40];
let colisao = false;

let botoesCima = [87, 38];
let botoesBaixo = [83, 40];

let pontosPlayer = [0, 0];
let posicaoPontos = [5, 1.17];


function mostraAtor(){
  for(let i = 0; i < imagemAtores.length; i++){
    image(imagemAtores[i], xAtores[i], yAtores[i], alturaAtores[i], larguraAtores[i]);
  }
}

function movimentoAtorCima(){
  for(let i = 0; i < imagemAtores.length; i++){
    if (keyIsDown(botoesCima[i])){
      yAtores[i] -= 3;
    }
  }
}

function movimentoAtorBaixo(){
  for(let i = 0; i < imagemAtores.length; i++){
    if (keyIsDown(botoesBaixo[i])){
      if (yAtores[i] < 366){
        yAtores[i] += 3;
      }
    }
  }
}

function verificaColisao(){
  for(let i = 0; i < imagemCarros.length; i++){
    
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtores[0], yAtores[0], 14);
    if (colisao){
      yAtores[0] = 366;
      if (pontosPlayer[0] > 0){
        pontosPlayer[0] -= 1;
      }
    }
    
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtores[1], yAtores[1], 16);
    if (colisao){
      yAtores[1] = 366;
      if (pontosPlayer[1] > 0){
        pontosPlayer[1] -= 1;
      }
    }
  }
}

function incluiPontos(){
  for(let i = 0; i < imagemAtores.length; i++){
    fill(color(173,216,230))
    textAlign(CENTER);
    textSize(30);
    text(pontosPlayer[i], width / posicaoPontos[i], 29);
  }
}

function marcaPonto(){
  for(let i = 0; i < imagemAtores.length; i++){
    if (yAtores[i] < 20){
      pontosPlayer[i] += 1;
      yAtores[i] = 366
    }
  }  
} 