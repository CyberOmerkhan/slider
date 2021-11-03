window.onload = function(){
    const left = document.querySelector('.btnLeft');
    const right = document.querySelector('.btnRight');
    const slider = document.querySelector('.carusel_slide');
    const images = document.querySelectorAll('.carusel_slide img');
    let counter = 0;
    const stepSize = images[0].clientWidth;
    slider.style.transform = `translateX(${-stepSize * counter}px)`;
    right.addEventListener('click', () => {
        slider.classList.add('transformAnimation');
        counter++;
        slider.style.transform = `translateX(${-stepSize * counter}px)`;
        counter >= images.length-1 ? (counter = -1) : null;
    });
    left.addEventListener('click', () => {
        if(counter <= 0)
            counter = images.length;
        counter--;
        slider.style.transform = `translateX(${-stepSize * counter}px)`;
    })
}