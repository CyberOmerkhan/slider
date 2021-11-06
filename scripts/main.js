$(() => {
    let width = $('img')[0].width;
    let counter = 0;
    let offset = 0;
    $('#btnLeft').bind('click', () => {
        ++clicker;
        offset = counter;
    })
    $('.slider').css('overflow', 'hidden');
})