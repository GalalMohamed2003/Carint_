$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 4
        }
    }
})



//Dark Mode and Light Mode

const icon = document.getElementById('icon-moon'),
nav = document.getElementById('nav-links'),
body = document.querySelector('body'),
h1_service = document.querySelector('.services-text'),
card1 = document.getElementById('img-text1'),
card2 = document.getElementById('img-text2'),
card3 = document.getElementById('img-text3'),
card4 = document.getElementById('img-text4'),
client1 = document.getElementById('client'),
footer = document.getElementById('aboutme');

icon.addEventListener('click' , function(){
    this.classList.toggle('fa-sun');
    
    if(this.classList.toggle('fa-moon')){
        body.style.background= 'white';
        body.style.color= '#2d2d2d';
        nav.style.color='black';
        body.style.transition = '2s';
       h1_service.style.color= '#2d2d2d';
       
    }
    else
    {
        body.style.background= '#2d2d2d';
        body.style.color= 'white';
        nav.style.color='white';
        h1_service.style.color= 'white';
        card1.style.background='#191919';
        card2.style.background='#191919';
        card3.style.background='#191919';
        card4.style.background='#191919';
        client1.style.color='#191919';
        footer.style.background='#191919';
        footer.style.color='white';
        body.style.transition = '2s';
    }
})