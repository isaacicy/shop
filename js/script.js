// 1. Wrap in DOMContentLoaded to ensure the element exists
document.addEventListener('DOMContentLoaded', () => {
    // 2. Added quotes around 'bg-vid'
    const video = document.getElementById('bg-vid');
    
    if (video) {
        video.addEventListener('ended', () => {
            // 5 minutes = 300,000 milliseconds
            setTimeout(() => {
                video.play();
            }, 6000);
        });
    } else {
        console.error("Could not find video element with id 'bg-vid'");
    }

    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
});