const images = $('.slider img');
$('.slider_line').css('width', `${$('.slider img').width() * images.length}px`);
document.querySelectorAll('.slider_line img').forEach(image => {
    console.log(image.width);
})