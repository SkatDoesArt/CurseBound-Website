let lightmode = localStorage.getItem('lightmode')
const body = document.querySelector('body')
const title = document.querySelector('h3')
const toggle = document.getElementById('toggle');
const toggle_text = document.getElementById('toggle_text');

const enableLightmode = () => {
    toggle.classList.toggle('active')
    body.classList.toggle('active')
    title.classList.toggle('active')
    localStorage.setItem('lightmode','active')
}

toggle.onclick = function(){
    toggle.classList.toggle('active')
    body.classList.toggle('active')
    title.classList.toggle('active')
    localStorage.setItem('lightmode','active')
}
toggle_text.onclick = function(){
    toggle.classList.toggle('active')
    body.classList.toggle('active')
    title.classList.toggle('active')
    localStorage.setItem('lightmode','active')
}