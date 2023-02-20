function setup() {
    createCanvas(700, 400);
  }
  
  function draw() {
    background(imagemDaEstrada);
    mostraAtor();
    movimentoAtorCima();
    movimentoAtorBaixo();
    mostraCarro();
    movimentoCarro();
    voltaCarro();
    verificaColisao();
    incluiPontos();
    marcaPonto();
  }