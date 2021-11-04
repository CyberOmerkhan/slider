const images = document.querySelectorAll('.slider-line img');
const sliderLine = document.querySelector('.slider-line');
let width = 0, offset = 0;
images.forEach(photo => {
    width += photo.width;
})
sliderLine.style.width = `${width}px`;
sliderLine.style.height = images[0].height;
document.querySelector('.slider-next').addEventListener('click', () => {
    offset = offset - images[0].width;
    if(-offset >= width){
        offset = 0;
    }
    sliderLine.style.left = `${offset}px`;
});
document.querySelector('.slider-prev').addEventListener('click', () => {
    offset = offset + images[0].width;
    if(offset > 0){
        offset = -width + images[0].width;
    }
    sliderLine.style.left = `${offset}px`;
    console.log(offset);
});