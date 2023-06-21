document.addEventListener("DOMContentLoaded", () => {
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const sliderContainer = document.querySelector(".slider-container");
  const sliderItems = Array.from(document.querySelectorAll(".slider-item"));

  let currentIndex = 0;

  showSlide = (index) => {
    sliderItems.forEach((item) => {
      item.classList.remove("active");
    });

    sliderItems[index].classList.add("active");
  };

  prevBtn.addEventListener("click", () => {
    currentIndex =
      currentIndex === 0 ? sliderItems.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex =
      currentIndex === sliderItems.length - 1 ? 0 : currentIndex + 1;
    showSlide(currentIndex);
  });

  showSlide(currentIndex);
});
