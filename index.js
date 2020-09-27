let hour = document.getElementById('hr')
let min = document.getElementById('min')
let sec = document.getElementById('sec')

function setTime(){
    const now = new Date()

    let secs = now.getSeconds();
    let degreeSec = ((secs /60 ) * 360) + 270;
    sec.style.transform = `rotate(${degreeSec}deg)`;

    let mins = now.getMinutes();
    let degreeMin = ((mins/60) * 360) + 270;
    min.style.transform = `rotate(${degreeMin}deg)`;

    let hrs = now.getHours();
    let degreeHr = ((hrs/12) * 360) + 270;
    hour.style.transform = `rotate(${degreeHr}deg)`;
    console.log(sec.style.transform )
    
}



setInterval(setTime,1000)