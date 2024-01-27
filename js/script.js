$(document).ready(() => {

    $('.back_to_top').click(() => {
        $('html, body').animate({scrollTop: 0}, 500);
    })

    $(window).on('scroll', () => {
        let scrollTop = $(this).scrollTop(); 

        if(scrollTop > 200){
            $('.navbar').addClass('main_menu_bg');
        }else{
            $('.navbar').removeClass('main_menu_bg');
        }

        if(scrollTop > 350){
            $('.back_to_top').fadeIn()
        }else{
            $('.back_to_top').fadeOut()
        }
})
})

new WOW().init();