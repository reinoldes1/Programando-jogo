//Codigo do Carro

let xCarros = [700, 700, 700, 700, 700, 700];
let yCarros = [40, 100, 155, 215, 270, 325];
let velocidadeCarros = [2.5, 3.5, 3.0, 2.7, 4.0, 3.4];
let comprimentoCarro = 50;
let alturaCarro = 30;

function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentoCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    if (foraDaTela(xCarros[i])){
      xCarros[i] = 700;
    }
  }
}

function foraDaTela(xCarro){
  return xCarro < -50;
}