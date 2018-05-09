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
    $('.navbar-gallery').hover(function(){
        $('.category').show();
    });
    $('.category').mouseleave(function(){
        $(this).hide();
    });
    $('.sub-category').hover(function(){
        var texts = $(this).find('h4').text();
        $('#category').text(texts);
        $(this).find('img').css({'opacity': '1'})
        $(this).find('h4').show();
    }, function(){
        $('#category').text('Gallery');
        $(this).find('img').css({'opacity': '0.8'})
        $(this).find('h4').hide();
    });
    $('.item-gallery').hover(function(){
        $(this).find('.deskripsi-item').toggle();
        $(this).find('img').css({'transform': 'scale(1.1)', 'opacity': '0.7'});
    }, function(){
        $(this).find('.deskripsi-item').toggle();
        $(this).find('img').css({'transform': 'scale(1.0)', 'opacity': '1'});
    });

    //===========================
    //====      Articles    =====
    //===========================

    $(this).mousemove( function(e){
        var a = e.pageX;
        var b = e.pageY;
        if (a > 1280){
            $(this).find('.daftar-isi').show("slide", 'slow');
        }
        $('#position').val(a);
    });
    $('.daftar-isi').mouseleave(function(){
        $(this).hide();
    });
    $('#DaftarIsi').click(function(){
        $('.daftar-isi').toggle();
    });

    $('.head-list').click(function(){
        $(this).parent().find('.list').toggle();
    });
    $('.item-list').click(function(){
        $(this).next().toggle();
        $(this).find('.fas').toggleClass('rotate');
    });

    //===========================
    //====      Articles    =====
    //===========================
    

})