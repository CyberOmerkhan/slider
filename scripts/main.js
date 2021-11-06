$(() => {
    let width = $('img')[0].width;
    let clicker = 0;
    $('#btnLeft').bind('click', () => {
        $('.slider img').css('left', '256px');
    })
    $('.slider').css('overflow', 'hidden');
})