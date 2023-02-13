var actives = document.querySelectorAll('.choose');
var themeChange = document.querySelector('body')

actives.forEach ((box, index) => {
    box.addEventListener('click', () => {
        chooseActive();
        box.classList.add('active');

        if (index == 1) {
            themeChange.classList.remove('theme-3'); 
            themeChange.classList.add('theme-2');
        } else if (index == 2){
            themeChange.classList.remove('theme-2');
            themeChange.classList.add('theme-3');         
        } else {
            themeChange.classList.remove('theme-2');
            themeChange.classList.remove('theme-3'); 
        }

    })
})
function chooseActive() {
    actives.forEach( activate => activate.classList.remove('active'));
}