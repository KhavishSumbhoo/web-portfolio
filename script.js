$(document).ready(function(){
    $(window).scroll(function(){
        
		
        if(this.scrollY > 20){
        $('.navbar').addClass("sticky");
		}else{
        $('.navbar').removeClass("sticky");
			
        }
		});	   	    
	// toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
		$('.menu-btn i').toggleClass("active");
    });
	



    // typing text animation script
    var typed = new Typed(".typing-1", {
        strings: ["Motion Designer","VFX Artist", "Graphic Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


  // typing text animation script
  var typed = new Typed(".typing-2", {
    strings: ["Motion Designer","VFX Artist", "Graphic Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

});



// Lightbox

var lightbox= new SimpleLightbox('.gallery a', {/* options */});


