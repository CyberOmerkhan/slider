$(() => {
    const images = $('.slider img');
    $('.slider_line').css('width', `${$('.slider img').width() * images.length}px`);
    let offset = 0, counter = 0, summWidth = 0;
    document.querySelectorAll('.slider_line img').forEach(image => {
        summWidth += image.width;
    });
    $('#btnRight').bind('click', () => {
        offset -= images[0].width;
        $('.slider_line').css('left', `${offset}px`, 2000);
        if(offset < -768)
            offset = 0;
            $('.slider_line').css('left', `${offset}px`, 2000);
        console.log(offset);
    });
    $('#btnLeft').bind('click', () => {
        offset += images[0].width;
        $('.slider_line').css('left', `${offset}px`, 2000);
        if(offset > 0)
            offset = -summWidth + images[0].width;
            $('.slider_line').css('left', `${offset}px`, 2000);
        console.log(offset);
    })
})