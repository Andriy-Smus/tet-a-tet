
$(function(){
    $('.start').click(()=>{
        $('.start').css('display', 'none')
        $('.starting').css('display', 'block')
        $('.starting-col').animate({
            width: '100%'
        }, 10000, function(){
            $('.picture').css('display', 'none');
            $('.starting').css('display', 'none');
            $('.starting-col').css('width', '0%');
            $('.timer').css('display', 'block');
            $('.timer-top').css('display', 'block');
            $('.timer-bottom').css('display', 'block');
            $('.topic').css('display', 'block');
            $('.topic-1').css('border', '3px solid rgb(0 178 132)');
        })
    })
})


let t_sec = '70';
let t_min = '03';
let a = 0;
function timer_func(){
    t_sec--;
    if (t_sec < 10) t_sec = '0' + t_sec;
    document.querySelector('.timer-top').innerHTML = t_min + ':' + t_sec;
    if(t_min == 00 && t_sec == 00) {
        a++
        clearInterval(intervalID_2);
        document.querySelector('.timer-top').innerHTML = `00:00`;
    }
    else if(t_sec == 00) {
        t_min--;
        if (t_min < 10) t_min = '0' + t_min;
        document.querySelector('.timer-top').innerHTML = t_min + ':' + t_sec;
        t_sec = "60";
    }
    
    if(t_min == 00 && t_sec == 00 && a == 1){
        t_sec = '20';
        t_min = '00';
        intervalID_2 = setInterval(timer_func, 10*100);
        player.play();
        document.querySelector('.topic').textContent = document.querySelector('.topic-2').textContent;
        document.querySelector('.topic-2').style.border = '3px solid rgb(0 178 132)';
        document.querySelector('.topic-1').style.border = 'none';
    }
    if(t_min == 00 && t_sec == 00 && a == 2){
        t_sec = '60';
        t_min = '03';
        intervalID_2 = setInterval(timer_func, 10*100);
        player.pause();
        player.load();
    }
    if(t_min == 00 && t_sec == 00 && a == 3){
        t_sec = '20';
        t_min = '00';
        intervalID_2 = setInterval(timer_func, 10*100);
        player.play();
        document.querySelector('.topic').textContent = document.querySelector('.topic-3').textContent;
        document.querySelector('.topic-3').style.border = '3px solid rgb(0 178 132)';
        document.querySelector('.topic-2').style.border = 'none';
    }
    if(t_min == 00 && t_sec == 00 && a == 4){
        t_sec = '60';
        t_min = '03';
        intervalID_2 = setInterval(timer_func, 10*100);
        player.pause();
        player.load();
    }
    if(t_min == 00 && t_sec == 00 && a == 5){
        t_sec = '20';
        t_min = '00';
        intervalID_2 = setInterval(timer_func, 10*100);
        player.play();
        document.querySelector('.topic').textContent = document.querySelector('.topic-4').textContent;
        document.querySelector('.topic-4').style.border = '3px solid rgb(0 178 132)';
        document.querySelector('.topic-3').style.border = 'none';
    }
    if(t_min == 00 && t_sec == 00 && a == 6){
        t_sec = '60';
        t_min = '03';
        intervalID_2 = setInterval(timer_func, 10*100);
        player.pause();
        player.load();
    }
    if(t_min == 00 && t_sec == 00 && a == 7){
        t_sec = '20';
        t_min = '00';
        intervalID_2 = setInterval(timer_func, 10*100);
        player.play();
        document.querySelector('.topic').textContent = document.querySelector('.topic-5').textContent;
        document.querySelector('.topic-5').style.border = '3px solid rgb(0 178 132)';
        document.querySelector('.topic-4').style.border = 'none';
    }
    if(t_min == 00 && t_sec == 00 && a == 8){
        t_sec = '60';
        t_min = '03';
        intervalID_2 = setInterval(timer_func, 10*100);
        player.pause();
        player.load();
    }
    if(t_min == 00 && t_sec == 00 && a == 9){
        t_sec = '20';
        t_min = '00';
        intervalID_2 = setInterval(timer_func, 10*100);
        player.play();
        document.querySelector('.topic').textContent = document.querySelector('.topic-6').textContent;
        document.querySelector('.topic-6').style.border = '3px solid rgb(0 178 132)';
        document.querySelector('.topic-5').style.border = 'none';
    }
    if(t_min == 00 && t_sec == 00 && a == 10){
        t_sec = '60';
        t_min = '03';
        intervalID_2 = setInterval(timer_func, 10*100);
        player.pause();
        player.load();
    }
    if(t_min == 00 && t_sec == 00 && a == 11){
        t_sec = '20';
        t_min = '00';
        intervalID_2 = setInterval(timer_func, 10*100);
        player.play();
        document.querySelector('.topic').textContent = document.querySelector('.topic-7').textContent;
        document.querySelector('.topic-7').style.border = '3px solid rgb(0 178 132)';
        document.querySelector('.topic-6').style.border = 'none';
    }
    if(t_min == 00 && t_sec == 00 && a == 12){
        t_sec = '60';
        t_min = '03';
        intervalID_2 = setInterval(timer_func, 10*100);
        player.pause();
        player.load();
    }
    if(t_min == 00 && t_sec == 00 && a == 13){
        t_sec = '20';
        t_min = '00';
        intervalID_2 = setInterval(timer_func, 10*100);
        player.play();
        document.querySelector('.topic').textContent = 'Гра завершена!';
        document.querySelector('.topic').style.textAlign = 'center';
        document.querySelector('.topic-7').style.border = 'none';
        document.querySelector('.return').style.display = 'block';
    }
    if(t_min == 00 && t_sec == 00 && a == 14){
        player.pause();
        player.load();
    }

}
let intervalID_2;
document.querySelector('.start').onclick = function(){
    intervalID_2 = setInterval(timer_func, 10*100);
    document.querySelector('.timer-start').disabled = true;
    document.querySelector('.timer-stop').disabled = false;
}
document.querySelector('.timer-start').onclick = function(){
    intervalID_2 = setInterval(timer_func, 10*100);
    document.querySelector('.timer-start').disabled = true;
    document.querySelector('.timer-stop').disabled = false;
}

document.querySelector('.timer-stop').onclick = function(){
    clearInterval(intervalID_2);
    document.querySelector('.timer-start').disabled = false;
    document.querySelector('.timer-stop').disabled = true;
    player.pause();
    player.load();
}

document.querySelector('.return').onclick = function(){
    document.querySelector('.return').style.display = 'none';
    document.querySelector('.start').style.display = 'block';
    document.querySelector('.picture').style.display = 'block';
    document.querySelector('.timer').style.display = 'none';
    document.querySelector('.timer-top').style.display = 'none';
    document.querySelector('.timer-bottom').style.display = 'none';
    document.querySelector('.topic').style.display = 'none';
    document.querySelector('.topic').textContent = document.querySelector('.topic-1').textContent;
    t_sec = '70';
    t_min = '04';
    a = 0;
}




