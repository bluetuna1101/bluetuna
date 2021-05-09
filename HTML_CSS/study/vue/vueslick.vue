<template>
  <VueSlickCarousel v-bind="settings">
    <div><h3>1</h3></div>
    /*...*/
  </VueSlickCarousel>
</template>
<script>
export default {
  data() {
    return {
      settings: {
        arrows: true, //화살표
        dots: true, //
        infinite: true, // 무한
        slidesToShow: 3, // 보여지는 갯수 *(height에 영향을 줌)
        slidesToScroll: 1, // 스크롤되는 수
        vertical: true, // 세로 슬라이드
        verticalSwiping: true,
        pauseOnFocus: false, // 자연스러운 autoplay 를 위해서는 아래 두 값을 false 로 줘야 한다.
        pauseOnHover: false,
      },
    }
  },
}
</script>
