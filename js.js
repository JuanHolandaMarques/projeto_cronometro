
/* pegando minutagem */
  const milesimos = document.getElementById('milesimos')
  const segundos = document.getElementById ('segundos')

  var segunds = 0
  var milesims = 0

  function iniciarContagem() {

    if(milesims<=9){
      milesimos.innerText = "0" + milesims
      
      milesims++
    }

  }


