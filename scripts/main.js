$(() => {
    const images = $('.slider img');
    $('.slider_line').css('width', `${$('.slider img').width() * images.length}px`);
    let offset = 0, counter = 0, summWidth = 0;
    document.querySelectorAll('.slider_line img').forEach(image => {
        summWidth += image.width;
    });
    $('#btnRight').bind('click', () => {
        offset -= images[0].width;
        document.querySelector('.slider_line').style.left = `${offset}px`;
        if(offset < -768)
            offset = 0;
            document.querySelector('.slider_line').style.left = `${offset}px`;
        console.log(offset);
    });
})