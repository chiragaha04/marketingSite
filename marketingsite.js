// sidebar

function opennav() {
    'use strict';
    const sidepanel = document.getElementById('mySidepanel');
    if (sidepanel) {
        sidepanel.style.left = '0';
    } else {
        console.error('error: side panel not found');
    }
}
function closenav() {
    'use strict';
    const sidepanel = document.getElementById('mySidepanel');
    if (sidepanel) {
        sidepanel.style.left = '-320px';
    } else {
        console.error('error: side panel not found');
    }
}
//search
function open_search() {
    'use strict';
    const searchpanel = document.getElementById('search-bar')
    if (searchpanel) {
        searchpanel.style.height = '100vh';
        searchpanel.style.borderRadius = '0';
    } else {
        console.error('error: search panel not found');
    }
}
function close_search() {
    'use strict';
    const searchpanel = document.getElementById('search-bar')
    if (searchpanel) {
        searchpanel.style.height = '0';
        searchpanel.style.borderTopLeftRadius = '100%';
        searchpanel.style.borderToprightRadius = '100%';
    } else {
        console.error('error: search panel not found');
    }
}

// portfolio gallary
function open_img(evt, cityname) {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(cityname).style.display = "block";
    evt.currentTarget.classList.add('active');

}
// responsive logoipsum slider

$('.sliderlogo').slick({
    arrow: false,
    dots: false,
    infinite: false,
    autoplay: false,
    speed: 300,
    slidesToShow: 5,
    sliderToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 4,
            sliderToScroll: 1,
            infinite: true,
            dots: false,
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            sliderToScroll: 1,

        }
    }
    ]
})
// team
$('.team-slider').slick({
    arrows: false,
    dots: true,
    infinite: false,
    autoplay: true,
    speed: 800,
    slidesToShow: 4,
    sliderToScroll: 1,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            sliderToScroll: 1,
            infinite: true,
            dots: true,
        }
    },
    {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            sliderToScroll: 1
           
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            sliderToScroll: 1
           
        }
    }

    ]
})