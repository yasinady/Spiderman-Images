const menuToggle = document.querySelector('.fa');
menuToggle.onclick = function(){
    menuToggle.classList.toggle('active')
}

const body = document.querySelector('body')
const mode = document.querySelector('.mode')
const icon = document.getElementById('light-icon')
isMode = false
isIcon = false

mode.onclick = function(){
    if(this.isMode){
        this.isMode = false
        this.isIcon = false
        body.classList.remove('light')
        icon.classList.remove('fa-lightbulb-slash')
    } else {
        this.isMode = true
        this.isIcon = true
        body.classList.add('light')
        icon.classList.add('fa-lightbulb-slash')
    }
}