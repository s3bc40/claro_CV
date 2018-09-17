/*
 * JS cv Claro
 * Auhtor : Sebastien Goncalves Claro
 * 23/05/2018
*/

$(document).ready(function() { // w3school template animation
    // slide animation on scroll (not used but later maybe)
    $(window).scroll(function() {
        $(".slideanim").each(function(){
        var pos = $(this).offset().top;
    
        var winTop = $(window).scrollTop();
        if (pos < winTop + 800) {
            $(this).addClass("slide");
        }
        });
    });
    // // WIP to change download pdf and cv website
    // $("a").remove();
    // $("#contact").append('<a href="pdf/curriculum_vitae_CLARO.pdf" download="CV_CLARO"><p><i class="fa fa-github fa-contact"></i>&nbsp; CV au format pdf</p></a>')

})