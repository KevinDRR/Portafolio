/* LANGUAGE */
var check = document.querySelector(".check");
check.addEventListener('click', idioma);

function idioma() {
    if (check.checked) {
        location.href = "es/index.html";
    } else {
        location.href = "../index.html";
    }
}

/* NAV & PUSHBAR */
window.addEventListener("scroll", function () {
    var nav = document.querySelector("nav");
    var ps = document.getElementById("pushbar");
    nav.classList.toggle("abajo", window.scrollY > 0);
    ps.classList.toggle("abajo", window.scrollY > 0);
    ps.style.bottom = window.scrollY > 0 ? "-60px" : "-5px";
});

jQuery(document).ready(function ($) {

    /* MENU NAV */
    $('#menu').click(function () {
        $('nav').toggleClass('show');
    });

    /* ABOUTME */
    var aboutmeTabs = ['general', 'frontend', 'backend', 'design'];

    function switchAboutTab(active) {
        aboutmeTabs.forEach(function (tab) {
            var isActive = tab === active;
            $('#slc_' + tab).toggle(isActive);
            $('#' + tab + 'Btn').toggleClass('slcred', isActive);
        });
    }

    switchAboutTab('general');

    aboutmeTabs.forEach(function (tab) {
        $('#' + tab + 'Btn').click(function () {
            switchAboutTab(tab);
        });
    });

    /* CARDS */
    var cardPanels = ['cards', 'cards2', 'cards3', 'cards4', 'cards5'];
    var cardBtns   = ['c_1',   'c_2',    'c_3',    'c_4',    'c_5'  ];

    function switchCardTab(activeIndex) {
        cardPanels.forEach(function (panel, i) {
            if (i === activeIndex) {
                $('#' + panel).fadeIn();
            } else {
                $('#' + panel).hide();
            }
        });
        cardBtns.forEach(function (btn, i) {
            $('#' + btn).toggleClass('cardred clicked', i === activeIndex);
        });
    }

    switchCardTab(0);

    cardBtns.forEach(function (btn, i) {
        $('#' + btn).click(function () {
            switchCardTab(i);
        });
    });

});
