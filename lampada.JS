const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');


function lampOn() { 
        lamp.src = './img/ligada.jpeg';
}

function lampOff() {
    lamp.src = './img/desligada.jpeg';

}
function lampBroken() {
    lamp.src ='./img/quebrada.jpeg';
}
function thelampBroken() {
    return lamp.src.indexof('quebrada') > -1;
}


turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave',lampOff);
lamp.addEventListener('dblclick', lampBroken);
