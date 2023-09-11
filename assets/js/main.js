function criaTempo(segundosE){
  const data = new Date(segundosE * 1000)
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
  });
}
//------------------------------------------------------
let segundos = 0;
let timer;

function iniciarTimer(){
  timer = setInterval(function(){
    segundos++
    tempo.innerHTML = criaTempo(segundos)
  }, 1000

  )
}
//----------------------------
const tempo = document.querySelector('#tempo');
const iniciar = document.querySelector('#iniciar');
const pausar = document.querySelector('#pausar');
const zerar = document.querySelector('#zerar');

//-------------------------------------------------------
iniciar.addEventListener('click', function(e){
  clearInterval(timer);
  iniciarTimer()
})
pausar.addEventListener('click', function(e){
  clearInterval(timer);
})
zerar.addEventListener('click', function(e){
  clearInterval(timer);
  tempo.innerHTML = '00:00:00'
  segundos = 0;
  
})


