const dropdown = document.querySelector('.dropdown');
const toggleButton = document.querySelector('.dropdown-toggle ');
const play = document.querySelector('.play');
const menu = document.querySelector('.dropdown-menu');
const options = document.querySelectorAll('.dropdown-option');
const playButton = document.querySelector('.play-button');
const stopButton = document.querySelector('.stop-button');
const audio1 = document.querySelector('.audio1');
const audio2 = document.querySelector('.audio2');
const audio3 = document.querySelector('.audio3');
const audio4 = document.querySelector('.audio4');
const audio5 = document.querySelector('.audio5');
// 토글버튼이 클릭 -> 메뉴를 보여준다.
// 메뉴 max-height: 0 
// 메뉴.show ->해지
toggleButton.addEventListener('click',function(){
    menu.classList.toggle('show')
})
toggleButton.addEventListener('blur',function(){
    menu.classList.remove('show')
})
// blur 선택된 영역을 해제 시킬때 사용 

options.forEach(function(item){
   item.addEventListener('click', function(e){
       const value = e.currentTarget.textContent.trim()
       toggleButton.textContent = value
       toggleButton.classList.add('selected')
       playButton.removeAttribute('disabled')
       playButton.style.display ="block";
       stopButton.style.display ="none";
    })
})
/* play1 */
const one_dropdown = document.querySelector('.one_dropdown');
const play_1 = document.querySelector('.play_1');
one_dropdown.onclick = showlist1;
function showlist1(){  
    play_1.style.display = "block";
    play_2.style.display = "none";
    play_3.style.display = "none";
    play_4.style.display = "none";
    play_5.style.display = "none";
    audio2.pause();
    audio2.currentTime = 0;
    audio3.pause();
    audio3.currentTime = 0;
    audio4.pause();
    audio4.currentTime = 0;
    audio5.pause();
    audio5.currentTime = 0;
    audio1.play();
    audio1.volume = 0.5;
    playButton.style.display = "none";
    stopButton.style.display = "block";
    playButton.addEventListener('click',function(){
        audio1.play();
        audio2.pause();
        audio3.pause();
        audio4.pause();
        audio5.pause();
    })
};
/* play2 */
const two_dropdown = document.querySelector('.two_dropdown');
const play_2 = document.querySelector('.play_2');
two_dropdown.onclick = showlist2;

function showlist2(){  
    play_2.style.display = "block";
    play_1.style.display = "none";
    play_3.style.display = "none";
    play_4.style.display = "none";
    play_5.style.display = "none";
    audio1.pause();
    audio1.currentTime = 0;
    audio3.pause();
    audio3.currentTime = 0;
    audio4.pause();
    audio4.currentTime = 0;
    audio5.pause();
    audio5.currentTime = 0;
    audio2.play();
    audio2.volume = 0.5;
    playButton.style.display = "none";
    stopButton.style.display = "block";
    playButton.addEventListener('click',function(){
        audio2.play();
        audio1.pause();
        audio3.pause();
        audio4.pause();
        audio5.pause();
    })
};
/* play3 */
const three_dropdown = document.querySelector('.three_dropdown');
const play_3 = document.querySelector('.play_3');
three_dropdown.onclick = showlist3;

function showlist3(){  
    play_3.style.display = "block";
    play_1.style.display = "none";
    play_2.style.display = "none";
    play_4.style.display = "none";
    play_5.style.display = "none";
    audio1.pause();
    audio1.currentTime = 0;
    audio2.pause();
    audio2.currentTime = 0;
    audio4.pause();
    audio4.currentTime = 0;
    audio5.pause();
    audio5.currentTime = 0;
    audio3.play();
    audio3.volume = 0.5;
    playButton.style.display = "none";
    stopButton.style.display = "block";
    playButton.addEventListener('click',function(){
        audio3.play();
        audio2.pause();
        audio1.pause();
        audio4.pause();
        audio5.pause();
    })
};
/* play4 */
const four_dropdown = document.querySelector('.four_dropdown');
const play_4 = document.querySelector('.play_4');
four_dropdown.onclick = showlist4;

function showlist4(){  
    play_4.style.display = "block";
    play_1.style.display = "none";
    play_2.style.display = "none";
    play_3.style.display = "none";
    play_5.style.display = "none";
    audio1.pause();
    audio1.currentTime = 0;
    audio2.pause();
    audio2.currentTime = 0;
    audio3.pause();
    audio3.currentTime = 0;
    audio5.pause();
    audio5.currentTime = 0;
    audio4.play();
    audio4.volume = 0.5;
    playButton.style.display = "none";
    stopButton.style.display = "block";
    playButton.addEventListener('click',function(){
        audio4.play();
        audio2.pause();
        audio3.pause();
        audio1.pause();
        audio5.pause();
    })
};
/* play5 */
const five_dropdown = document.querySelector('.five_dropdown');
const play_5 = document.querySelector('.play_5');

five_dropdown.onclick = showlist5;
function showlist5(){ 
    play_5.style.display = "block";
    play_1.style.display = "none";
    play_2.style.display = "none";
    play_3.style.display = "none";
    play_4.style.display = "none";
    audio1.pause();
    audio1.currentTime = 0;
    audio2.pause();
    audio2.currentTime = 0;
    audio3.pause();
    audio3.currentTime = 0;
    audio4.pause();
    audio4.currentTime = 0;
    audio5.play();
    audio5.volume = 0.5;
    playButton.style.display = "none";
    stopButton.style.display = "block";
    playButton.addEventListener('click',function(){
        audio5.play();
        audio2.pause();
        audio3.pause();
        audio4.pause();
        audio1.pause();
    })
};
playButton.addEventListener('click',function(){
    playButton.style.display = "none";
    stopButton.style.display = "block";


})
stopButton.addEventListener('click',function(){
    playButton.style.display = "block";
    stopButton.style.display = "none";
    audio1.pause();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
})
