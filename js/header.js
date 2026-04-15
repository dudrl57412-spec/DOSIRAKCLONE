window.addEventListener("load", () => {
  //스크롤 될 때
  const header = document.querySelector(".header");
  let scy = 0;
  //   1.스크롤바의 픽셀 위치값을 파악해서
  scy = window.document.documentElement.scrollTop;
  // 2.class 적용 여부 결정
  //   if (scy > 0) {
  //     header.classList.add("active");
  //   }
  //스크롤시
  window.addEventListener("scroll", () => {
    scy = window.document.documentElement.scrollTop;
    if (scy > 0) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  });
});
