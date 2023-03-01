let btn_div = document.querySelector('#btn-div');
let no_btn = document.querySelector('#no-btn');
let yes_btn = document.querySelector('#yes-btn');

no_btn.addEventListener('mouseover', function(){
    no_btn.style.top = getRandom(btn_div.clientHeight - no_btn.clientHeight) + 'px';
    no_btn.style.left = getRandom(btn_div.clientWidth - no_btn.clientWidth) + 'px';
})

function getRandom(x){
    return Math.floor(Math.random()*x);
}

yes_btn.addEventListener('click', function(){
    window.location.href = './final.html';
})