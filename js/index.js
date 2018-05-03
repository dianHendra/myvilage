$(document).ready(function(){
    //==========================
    //====      index     ======
    //==========================
    $('.content').hover(function(){
        $(this).find('.item-content').show();
        // $(this).after().addClass('highlight');
        $(this).find('.figure-content').addClass('highlight');       
    }, function(){
        // $(this).after().removeClass('highlight');
        $(this).find('.item-content').hide();
        $(this).find('.figure-content').removeClass('highlight');
    });

    $('.btn-content').hover(function(){
        $(this).addClass('btn-highlight');
    }, function(){
        $(this).removeClass('btn-highlight');
    });

    $('.container-nav').mouseenter(function(){
        $('.sub-nav').show();
    }).mouseleave(function(){
        $('.sub-nav').hide();
    });
    //navbar handlers auto fix
    $(window).scroll(function () {
        if ($(this).scrollTop() > 270) {
            $('.container-nav').addClass("f-nav");
        } else {
            $('.container-nav').removeClass("f-nav");
        }
    });

    //===========================
    //====      Gallery     =====
    //===========================
    $('.category').hide();
    $('.navbar').hover(function(){
        $('.category').show();
    });
    $('.category').mouseleave(function(){
        $(this).hide();
    });
    $('.sub-category').hover(function(){
        $(this).find('img').css({'opacity': '1', 'height':  '100%'})
        $(this).find('h4').show();
    }, function(){
        $(this).find('img').css({'opacity': '0.7', 'height':  '80%'})
        $(this).find('h4').hide();
    });
    $('.item-gallery').hover(function(){
        $(this).find('.deskripsi-item').toggle();
        $(this).find('img').css('opacity', '0.5');
    }, function(){
        $(this).find('.deskripsi-item').toggle();
        $(this).find('img').css('opacity', '1');
    });

    //===========================
    //====      Articles    =====
    //===========================

    $(this).mousemove( function(e){
        var a = e.pageX;
        var b = e.pageY;
        if (a > 1300){
            $(this).find('.list-index').show();
        } else {
            $(this).find('.list-index').hide();
        }
        $('#position').val(a);
    });

    //===========================
    //====      Articles    =====
    //===========================
    

})