$(() => {
    const images = $('.slider img');
    $('.slider_line').css('width', `${$('.slider img').width() * images.length}px`);
    let offset = 0, counter = 0;
    $('#btnRight').bind('click', () => {
        counter++;
        offset -= images[0].width * counter;
        document.querySelector('.slider_line').style.left = `${offset}px`;
        offset = 0;
        if(counter >= images.length - 1)
            counter = -1;
    })
})