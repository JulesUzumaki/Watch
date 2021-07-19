window.onload=function(){ 

    let screen = document.getElementById('screen');
    let dateScreen = document.getElementById('dateScreen');

    const displayTime = () => {
        let today = new Date();
        let hours = today.getHours();
        let minutes = today.getMinutes();
        let seconds = today.getSeconds();
        let time;
        let day = today.getDate();
        let month = today.getMonth() + 1;
        let year = today.getFullYear();
        let date = day + '/' + month + '/' + year; 
        console.log(date);

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
        dateScreen.innerHTML = date;


    }
    setInterval(displayTime, 950);
}