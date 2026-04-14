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
    var cardTabs = [
        { panel: 'cards',  btn: 'c_1' },
        { panel: 'cards2', btn: 'c_2' },
        { panel: 'cards3', btn: 'c_3' },
        { panel: 'cards4', btn: 'c_4' },
        { panel: 'cards5', btn: 'c_5' }
    ];

    function switchCardTab(activeIndex) {
        cardTabs.forEach(function (tab, i) {
            var isActive = i === activeIndex;
            if (isActive) {
                $('#' + tab.panel).fadeIn();
            } else {
                $('#' + tab.panel).hide();
            }
            $('#' + tab.btn).toggleClass('cardred clicked', isActive);
        });
    }

    switchCardTab(0);

    cardTabs.forEach(function (tab, i) {
        $('#' + tab.btn).click(function () {
            switchCardTab(i);
        });
    });

});
