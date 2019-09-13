/***********************
        scroll
 ***********************/

window.addEventListener('scroll', function () {

    if (window.scrollY >= 100) {
        document.querySelector('header')
            .classList.add('scrolled')
        
    } else if (window.scrollY < 100) {
        document.querySelector('header')
            .classList.remove('scrolled')
        console.log(scrollY)
    }

})

/************************
    smooth navigation
 ************************/
$(document).ready(function () {
    $(".custom-a").on("click", function (e) {
        e.preventDefault();
        $('.humIcon').click()
        let section = $(this).attr("href")
        $('html ,body').animate({
            scrollTop: $(section).offset().top - 120
        }, 1200, "easeInOutExpo")
    })
})

const links = document.querySelectorAll('.custom-a')
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (e) {
        for (let i = 0; i < links.length; i++) {
            links[i].classList.remove('current')
        }
        this.classList.add('current')
    })
}

/************************
        HumbergerMenu
************************/
document.querySelector(".humIcon")
    .addEventListener("click", function () {
        document.querySelector(".iconRight")
            .classList.toggle("active")
        document.querySelector("header")
            .classList.toggle("expand")
    })


/********************
        WOW JS
*********************/
$(document).ready(function(){
    new WOW().init();
})


/*********************
    Form Submitting
 *********************/

document.querySelector(".myform")
.addEventListener('submit', function(e){
    e.preventDefault()
    alert(`Hi ${e.target.name.value} thanks for choosing us :)
    \n a table for ${e.target.number.value} has been booked for you
    \n at ${e.target.date.value}, ${e.target.time.value}`)
})