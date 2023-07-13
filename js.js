/* pegando minutagem */
  const milesimos = document.getElementById('milesimos')
  const segundos = document.getElementById ('segundos')
  const minutos = document.getElementById('minutos')

  /*valor da minutagem*/
  var segunds = 0
  var milesims = 0
  var minuts = 0

  /* funções do cronometro */
  var intervalo


  function iniciarContagem(){
    intervalo = setInterval(Contagem, 10);
  }

  /* contador */
  function Contagem() {
      milesims++
      milesims <= 9 ? milesimos.innerText = "0" + milesims : milesimos.innerText = milesims;

      if(milesims >= 60){
        segunds ++
        milesims = 0

        segunds <= 9 ? segundos.innerText = "0" + segunds : segundos.innerText = segunds
      }

      if(segunds >= 60){
        minuts ++
        segunds = 0

        minuts <= 9 ? minutos.innerText = "0" + minuts : minutos.innerText = minuts
      }
  }

  function pararContagem(){
    clearInterval(intervalo)
    
  }

  function reiniciarContagem(){
    clearInterval(intervalo)

    milesims = 0
    segunds = 0
    minuts = 0

    milesimos.innerText = "00"
    segundos.innerText = "00"
    minutos.innerText = "00"
  }



