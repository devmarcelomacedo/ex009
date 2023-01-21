const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');


function lampOn() {
    lamp.src = './img/ligada.jpeg';
}
function lampOff() {
    lamp.src = './img/desligada.jpeg';
}


turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);