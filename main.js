const dropdown = document.querySelector('.dropdown')
const toggleButton = document.querySelector('.dropdown-toggle ')
const one_dropdown = document.querySelector('.one_dropdown')
const play = document.querySelector('.play')
const menu = document.querySelector('.dropdown-menu')
const options = document.querySelectorAll('.dropdown-option')
const nextButton = document.querySelector('.next-button')
const play1 = document.querySelector('.play_1');
const play2 = document.querySelector('.play_2');
const play3 = document.querySelector('.play_3');
const play4 = document.querySelector('.play_4');
const play5 = document.querySelector('.play_5');
// 토글버튼이 클릭 -> 메뉴를 보여준다.
// 메뉴 max-height: 0 
// 메뉴.show ->해지
toggleButton.addEventListener('click',function(){
    menu.classList.toggle('show')
})
one_dropdown.addEventListener('click',function(){
    document.getElementsByClassName('.play_1').style.display = "block";
})
toggleButton.addEventListener('blur',function(){
    menu.classList.remove('show')
})

play.addEventListener('blur',function(){
    menu.classList.remove('show')
})
// blur 선택된 영역을 해제 시킬때 사용 

options.forEach(function(item){
   item.addEventListener('click', function(e){
       const value = e.currentTarget.textContent.trim()
       toggleButton.textContent = value
       toggleButton.classList.add('selected')
       nextButton.removeAttribute('disabled')
    })
})
