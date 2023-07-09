$('.owl-carousel').owlCarousel({
    // items: 3,
    loop: true,
    margin: 10,
    autoplay:true,
    // autoplay: false,
    autoplayTimeout:4000, // Set auto slide duration in milliseconds
    autoplayHoverPause:true,
    responsiveClass: true,
    dots: false,
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        1400: {
            items: 3,
        },
        // 1400: {
        //     items: 3,
        //     // loop: false,
        // }
    }

})



// -------------------
document.addEventListener("DOMContentLoaded", function() {
    var videoLink = document.querySelector(".video-link");
    var videoOverlay = document.querySelector(".video-overlay");
    var closeButton = document.querySelector(".close-button");
  
    videoLink.addEventListener("click", function(e) {
      e.preventDefault();
      videoOverlay.style.display = "flex";
    });
  
    closeButton.addEventListener("click", function() {
      videoOverlay.style.display = "none";
    });
  });
  