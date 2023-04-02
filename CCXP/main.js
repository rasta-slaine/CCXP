
let dia = document.getElementById('dia');
let hora = document.getElementById('hora');
let minuto = document.getElementById('min');
let segundo = document.getElementById('seg');

let data_fim = '12-03-2023'
let data_ini1 = '11-29-2023 23:59'

function CountDown(){

    let data_fim2 = new Date(data_fim)

    let data_ini2 = new Date();

    let totalSegundos = (data_fim2 - data_ini2)/1000

    dia.innerHTML = `${Math.floor(totalSegundos/60/60/24)}D`
    hora.innerHTML = `${ArrumaTempo(Math.floor(totalSegundos/60/60)%24)}H`
    minuto.innerHTML = `${ArrumaTempo(Math.floor(totalSegundos/60)%60)}M`
    segundo.innerHTML = `${ArrumaTempo(Math.floor(totalSegundos)%60)}S`

    console.log(data_fim2)
    console.log(data_ini2)
    console.log(Math.floor(totalSegundos))
    console.log(Math.floor(totalSegundos/60/60/24))

}

function ArrumaTempo(tempo){
   return tempo < 10? `0${tempo}`:tempo
}

CountDown()
setInterval(CountDown,1000)