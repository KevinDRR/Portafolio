/* LANGUAGE */
var check = document.querySelector(".check");
check.addEventListener('click',idioma);

function idioma(){
    let id=check.checked;
    if(id==true){
        location.href="es/index.html"
    }else{
        location.href="../index.html"
    }
}

/* NAV */
window.addEventListener("scroll", function(){
    var nav = this.document.querySelector("nav");
    nav.classList.toggle("abajo",window.scrollY>0)
});

/* PUSHBAR */
window.addEventListener("scroll", function(){
    var ps = this.document.querySelector("#pushbar");
    ps.classList.toggle("abajo",window.scrollY>0)
    if (this.window.scrollY>0){
        document.getElementById("pushbar").style.bottom = "-60px";
    }else{
        document.getElementById("pushbar").style.bottom = "-5px";
    }  
});

/* MENU NAV */
jQuery('document').ready(function($){
    var menuBtn = $('#menu'),
        menu = $('nav');

    menuBtn.click(function(){

        if( menu.hasClass('show')){
            menu.removeClass('show');
        } else {
        menu.addClass("show");
        }

    });
});
 
/* ABOUTME */
jQuery('document').ready(function($){
    $('#generalBtn').addClass('slcred');

    $('#slc_frontend').hide();
    $('#slc_backend').hide();
    $('#slc_design').hide();
})

jQuery('document').ready(function($){
    var generalBtn = $('#generalBtn'),
        frontendBtn = $('#frontendBtn'),
        backendBtn = $('#backendBtn'),
        designBtn = $('#designBtn');

    generalBtn.click(function(){
        $('#slc_general').show();

        $('#slc_frontend').hide();
        $('#slc_backend').hide();
        $('#slc_design').hide();

        $('#generalBtn').addClass('slcred');

        $('#frontendBtn').removeClass('slcred');
        $('#backendBtn').removeClass('slcred');
        $('#designBtn').removeClass('slcred');
    })
    frontendBtn.click(function(){
        $('#slc_frontend').show();

        $('#slc_general').hide();
        $('#slc_backend').hide();
        $('#slc_design').hide();

        $('#frontendBtn').addClass('slcred');

        $('#generalBtn').removeClass('slcred');
        $('#backendBtn').removeClass('slcred');
        $('#designBtn').removeClass('slcred');
    })
    backendBtn.click(function(){
        $('#slc_backend').show();

        $('#slc_general').hide();
        $('#slc_frontend').hide();
        $('#slc_design').hide();

        $('#backendBtn').addClass('slcred');

        $('#generalBtn').removeClass('slcred');
        $('#frontendBtn').removeClass('slcred');
        $('#designBtn').removeClass('slcred');
    })
    designBtn.click(function(){
        $('#slc_design').show();

        $('#slc_general').hide();
        $('#slc_frontend').hide();
        $('#slc_backend').hide();

        $('#designBtn').addClass('slcred');

        $('#generalBtn').removeClass('slcred');
        $('#frontendBtn').removeClass('slcred');
        $('#backendBtn').removeClass('slcred');
    })
})  

/* CARDS */

jQuery('document').ready(function ($) {
    $('.clickable').click(function () {
        $('.clickable').removeClass('clicked');
        $(this).addClass('clicked');
    });

    // Resto de tu código...
});

jQuery('document').ready(function($){
    $('#c_1').addClass('cardred');

    $('#cards2').hide();
    $('#cards3').hide();
    $('#cards4').hide();
    $('#cards5').hide();
})

jQuery('document').ready(function($){
    var c1 = $('#c_1'),
        c2 = $('#c_2'),
        c3 = $('#c_3'),
        c4 = $('#c_4');
        c5 = $('#c_5');

    c1.click(function(){
        $('#cards').fadeIn();

        $('#cards2').hide();
        $('#cards3').hide();
        $('#cards4').hide();
        $('#cards5').hide();

        $(c1).addClass('cardred');

        $(c2).removeClass('cardred');
        $(c3).removeClass('cardred');
        $(c4).removeClass('cardred');
        $(c5).removeClass('cardred');
    })
    c2.click(function(){
        $('#cards2').fadeIn();

        $('#cards').hide();
        $('#cards3').hide();
        $('#cards4').hide();
        $('#cards5').hide();

        $(c2).addClass('cardred');

        $(c1).removeClass('cardred');
        $(c3).removeClass('cardred');
        $(c4).removeClass('cardred');
        $(c5).removeClass('cardred');
    })
    c3.click(function(){
        $('#cards3').fadeIn();

        $('#cards2').hide();
        $('#cards').hide();
        $('#cards4').hide();
        $('#cards5').hide();

        $(c3).addClass('cardred');

        $(c2).removeClass('cardred');
        $(c1).removeClass('cardred');
        $(c4).removeClass('cardred');
        $(c5).removeClass('cardred');
    })
    c4.click(function(){
        $('#cards4').fadeIn();

        $('#cards2').hide();
        $('#cards3').hide();
        $('#cards').hide();
        $('#cards5').hide();

        $(c4).addClass('cardred');

        $(c2).removeClass('cardred');
        $(c3).removeClass('cardred');
        $(c1).removeClass('cardred');
        $(c5).removeClass('cardred');
    })
    c5.click(function(){
        $('#cards5').fadeIn();

        $('#cards2').hide();
        $('#cards3').hide();
        $('#cards4').hide();
        $('#cards').hide();

        $(c5).addClass('cardred');

        $(c2).removeClass('cardred');
        $(c3).removeClass('cardred');
        $(c4).removeClass('cardred');
        $(c1).removeClass('cardred');
    })
})  
