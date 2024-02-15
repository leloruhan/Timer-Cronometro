function relogio() {
  function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  }

  const relogio = document.querySelector('.relogio');
  let segundos = 0;
  let timer;

  function iniciaRelogio() {
    timer = setInterval(function () {
      segundos++;
      relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
  }

  function buttonPlay() {
    const buttonPlay = document.querySelector('.iniciar');
    buttonPlay.addEventListener('click', function (e) {
      e.preventDefault()
      relogio.classList.remove('pausado');
      clearInterval(timer);
      iniciaRelogio();
    })
  }
  function buttonPausar() {
    const buttonPausar = document.querySelector('.pausar');
    buttonPausar.addEventListener('click', function (e) {
      e.preventDefault()
      clearInterval(timer);
      relogio.classList.add('pausado');
    })
  }

  function buttonZerar() {
    const buttonZerar = document.querySelector('.zerar');
    buttonZerar.addEventListener('click', function (e) {
      e.preventDefault()
      clearInterval(timer);
      relogio.innerHTML = '00:00:00';
      relogio.classList.remove('pausado');
      segundos = 0;
    })
  }
  buttonPlay();
  buttonPausar();
  buttonZerar();
  /*document.addEventListener('click', function(e) {
    const el = e.target;
    if (el.classList.contains('zerar')) {
      clearInterval(timer);
      relogio.innerHTML = '00:00:00';
      relogio.classList.remove('pausado');
      segundos = 0;
    }

    if (el.classList.contains('iniciar')) {
      relogio.classList.remove('pausado');
      clearInterval(timer);
      iniciaRelogio();
    }

    if (el.classList.contains('pausar')) {
      clearInterval(timer);
      relogio.classList.add('pausado');
    }
  });*/
}
window.addEventListener('DOMContentLoaded', relogio);
//relogio();
