$(document).ready(()=>{
    $('.slider').slick({
        infinite:false,
        slidesToShow: 3,
        slidesToScroll: 2,
    })
    $('.slick-prev').text('<')
    $('.slick-next').text('>')
})