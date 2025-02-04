
    let position = 0;
const line = document.querySelector('.users__scroll');
const scrollwidth = line.scrollWidth

document.querySelector('.button__right-gray').addEventListener('click', function(){
    position = position + scrollwidth / 4;
    if (position > (3 * scrollwidth) / 4){
        position = 0
    }
    line.style.left = - position + 'px' 
});
document.querySelector('.button__left-gray').addEventListener('click', function(){
    position = position - scrollwidth / 4;
    if (position < 0){
        position = (3 * scrollwidth) / 4
    }
    line.style.left = - position + 'px'
});
