class Forca {

  constructor(palavra){
    this.palavraVdd = palavra;
    this.estadoAtual = "aguardando chute";
    this.vidasRestantes =6;
    this.letrasChutadas = [];
    this.letrasCertas = [];
    this.letrasCertas = this.defineLetras(palavra);
    this.palavraInterna = palavra;
  }

  defineLetras(palavra){
    const array = []; 
    for (let index = 0; index < palavra.length; index++) {
      array.push("_");
    }
    return array;
  }


  chutar(letra){
    if (letra.length == 1){
      console.log("tem uma letra");
      this.analisarChute(letra);
    }
    else{
      console.log("NÃO tem uma letra");
    }
  }

  analisarChute(letra){
    if (this.letrasChutadas.indexOf(letra) == -1){
      const temLetra = this.palavraVdd.indexOf(letra) > -1;
      if (temLetra){
        this.atualizarLetrasCertas(letra);
      }
      else {
        this.vidasRestantes--;
      }
      
      this.letrasChutadas.push(letra);
    }
  }

  atualizarLetrasCertas(letra){
    while (this.palavraInterna.indexOf(letra) > -1){
      const posicao = this.palavraInterna.indexOf(letra);
      //const letraSubstituida = this.palavraInterna.substring(posicao, posicao + 1);
      this.palavraInterna = this.palavraInterna.replace(letra, "_");
      this.letrasCertas[posicao] = letra;
    }
  }

  buscarEstado(){ 
    if (this.vidasRestantes <= 0)
      return "perdeu";

    if (this.letrasAcertadas == this.palavraVdd.length){
      return "ganhou";
    }

    return "aguardando chute";
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo(){
      return{
          letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas\erradas
          vidas: this.vidasRestantes, // Quantidade de vidas restantes
          palavra: this.letrasCertas // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas\certas
      }
  }
}

module.exports = Forca;
