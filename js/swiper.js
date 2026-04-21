window.addEventListener("load", () => {
  // 비주얼 슬라이드
  // 1.슬라이드 개수 만큼 li를 생성하기
  const swSlideCount = document.querySelectorAll(
    ".sw-visual .swiper-slide",
  ).length;
  // console.log(swSlideCount); //4
  //2.LI태그 출력 장소(UL)저장
  const swSlideUl = document.querySelector(".sw-visual-pg-list");
  // console.log(swSlideUl);
  //3.li에 html로 작성할 금자를 생성한다
  let swVisualHtml = ``;
  for (let i = 0; i < swSlideCount; i++) {
    swVisualHtml = swVisualHtml + `<li>${i + 1}</li>`;
  }
  // console.log(swVisualHtml);
  // 4. swVisualHtml을 ul에 추가해준다
  swSlideUl.innerHTML = swVisualHtml;
  //5.페이지네이션 관련 (코딩으로 생성한 li태그들 저장)
  const swVisualPgLi = document.querySelectorAll(".sw-visual-pg-list li");
  // console.log(swVisualPgLi);

  const swVisual = new Swiper(".sw-visual", {
    effect: "fade",
    loop: true,
    // 슬라이드의 모션 속도를 transition 맞춘다.
    speed: 1500,
    autoplay: {
      delay: 2500,
      // 사용자가 마우스 클릭 드래그로 이동하면
      // 아래 구문이 없으면 autoplya 가 해제되므로
      // 이것을 방지해 주기위한 처리
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // 페이지네이션
    // pagination: {
    //     el: ".swiper-pagination",
    //   },
  });
  // 1.li.의 흰색 라인이 늘어나는 션을 실행
  swVisualPgLi[0].classList.add("active");
  //2.swiper가 바뀔 때 마다 실행
  // 슬라이더가 바뀌는 상태를 찾아서
  // 우리가 적용 하고자하는 처리를 한다
  swVisual.on("slideChange", function () {
    // console.log(swViusel .realIndex);

    swVisualPgLi.forEach((item, index) => {
      // console.log(item, index);
      if (swVisual.realIndex === index) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  });
  //li태그에 클릭을하면 슬라이드 기능
  swVisualPgLi.forEach((item, index) => {
    item.addEventListener("click", function () {
      //slideToLoop를 이용하면 원하는 페이지로 보낼 수 있다.
      // swVisual.slideToLoop(해당번호 , 속도, runCallbacks)
      swVisual.slideToLoop(index, 500, false);
    });
  });
});
