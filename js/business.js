window.addEventListener("load", () => {
  const swBusiness = new Swiper(".sw-business", {
    slidesPerView: 1,
    //spaceBetween: 20, <- slide 간의 간격(gap)
    breakpoints: {
      //640~1023
      480: { slidesPerView: 2 },
      //1024픽셀 이후
      1024: {
        slidesPerView: 3,
      },
    },
  });
  // business-modal
  const businessModal = document.querySelector(".business-modal");
  businessModal.addEventListener("click", () => {
    console.log("click");

    businessModal.style.display = "none";
  });
});
