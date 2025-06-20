const topBtn = document.querySelector(".to-top-btn");

window.addEventListener('scroll' , () => {
    if (window.pageYOffset > 400) {
        topBtn.classList.add("active");
    } else {
        topBtn.classList.remove("active");
    }
})

let currentSlide = 0;
const videos = document.querySelectorAll('.carousel-video');

function showSlide(index) {
  videos.forEach((video, i) => {
    video.classList.toggle('active', i === index);
    if (i === index) {
      video.play();
    } else {
      video.pause();
      video.currentTime = 0;
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % videos.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + videos.length) % videos.length;
  showSlide(currentSlide);
}

// Initialize first video
showSlide(currentSlide);

