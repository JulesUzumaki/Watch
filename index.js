window.onload=function(){ 

    let screen = document.getElementById('screen');

    const displayDate = () => {
        let today = new Date();
        let hours = today.getHours();
        let minutes = today.getMinutes();
        let seconds = today.getSeconds();
        let time;

        if(hours <= 9){
            time = '0' + hours + ':' + minutes + ':' + seconds;
        }
        if(minutes <= 9){
            time = hours + ':' + '0' + minutes + ':' + seconds;
        }
        if(seconds <= 9){
            time = '0' + hours + ':' + minutes + ':' + '0' + seconds;
        }
        if(hours > 9 && minutes > 9 && seconds > 9){
            time = hours + ':' + minutes + ':' + seconds;
        }
        screen.innerHTML = time;
    }
    setInterval(displayDate, 1000);
}