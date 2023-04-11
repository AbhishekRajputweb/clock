const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');


setInterval(() =>{
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    document.getElementById('hr').style.transform = `rotateZ(${hh+(mm/12)}deg)`;

    document.getElementById('mn').style.transform = `rotateZ(${mm}deg)`;
    document.getElementById('sc').style.transform = `rotateZ(${ss}deg)`;
})



