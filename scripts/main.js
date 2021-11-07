$(() => {
    const images = $('.slider img');
    $('.slider_line').css('width', `${$('.slider img').width() * images.length}px`);
    let offset = 0, counter = 0;
    $('#btnLeft').bind('click', () => {
        counter++;
        offset += images[0].width * counter;
        console.log(offset);
        document.querySelector('.slider_line').style.left = `${offset}px`;
    })
})