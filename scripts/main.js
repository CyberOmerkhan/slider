$(() => {
    let width = $('.slider img')[0].width;
    let counter = 0;
    let offset = 0;
    let summWidth = 0;
    let images = document.querySelectorAll('.slider img');
    images.forEach(image => {
        console.log(image.width);
    })
    $('#btnLeft').bind('click', () => {
        ++clicker;
        offset = counter * width;
        
    })
    $('.slider').css('overflow', 'hidden');
})