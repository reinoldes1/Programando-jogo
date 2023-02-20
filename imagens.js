//Imagens do Jogo

let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro;

function preload(){
  imagemDaEstrada = loadImage("Imagens/estrada.png");
  imagemDoAtor = loadImage("Imagens/ator-1.png");
  imagemDoAtor2 = loadImage("Imagens/Mzikka.png");
  imagemDoCarro = loadImage("Imagens/carro-1.png");
  imagemDoCarro2 = loadImage("Imagens/carro-2.png");
  imagemDoCarro3 = loadImage("Imagens/carro-3.png");
  imagemCarros = [imagemDoCarro, imagemDoCarro2, imagemDoCarro3, imagemDoCarro2, imagemDoCarro, imagemDoCarro3];
  imagemAtores = [imagemDoAtor, imagemDoAtor2];
}