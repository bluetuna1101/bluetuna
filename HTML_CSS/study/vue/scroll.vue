<template></template>

<script>
export default {
  data() {
    return {
      pageType: "1",
      isDefaultImage: true,
      defaultSectionThree: true,
    }
  },

  methods: {
    handleScroll() {
      // scroll 값을 숫자로 넣어줘도 되지만 모바일 패드 등 스크롤의 숫자 위치는 달라질 수 있기 때문에 차이를 줘서 차이값으로 계산을 해줘야 한다
      // document.querySelector('#section2').offsetHeight ** section2 height나옴
      // window.pageYOffset **지금 내 위치;ㅣ.........................................................
      // window.scrollY > section3 + window.pageYOffset ? console.log('넘었다!!!') : ''
      const section1 = document
        .querySelector("#section1")
        .getBoundingClientRect().top
      // scroll 감지해서 클래스를 더하거나 제거하기
      if (section1 < -12) {
        document.querySelector("#start_button").classList.add("start_button_mo")
      } else if (section1 > -12) {
        document
          .querySelector("#start_button")
          .classList.remove("start_button_mo")
      }

      const section3 = document
        .querySelector("#section3")
        .getBoundingClientRect().top
      if (section3 < 370) {
        document.querySelector("#sec3_title_fo").classList.add("fade-out")
        document.querySelector("#sec3_title_fixed").classList.add("fade-in")
      } else if (section3 > 870) {
        document.querySelector("#sec3_title_fo").classList.remove("fade-out")
        document.querySelector("#sec3_title_fixed").classList.remove("fade-in")
      }

      const section4 = document
        .querySelector("#section4")
        .getBoundingClientRect().top
      if (section4 < 320) {
        document.querySelector("#sec4_title_fo").classList.add("fade-out")
        document.querySelector("#sec4_img_fo").classList.add("fade-out")
        document.querySelector("#sec4_mo_img_fo").classList.add("fade-out")
        document.querySelector("#sec4_title_fixed").classList.add("fade-in")
        document.querySelector("#sec4_img_fixed").classList.add("fade-in")
        document.querySelector("#sec4_mo_img_fixed").classList.add("fade-in")
      } else if (section4 > 1000) {
        document.querySelector("#sec4_title_fo").classList.remove("fade-out")
        document.querySelector("#sec4_img_fo").classList.remove("fade-out")
        document.querySelector("#sec4_mo_img_fo").classList.remove("fade-out")
        document.querySelector("#sec4_title_fixed").classList.remove("fade-in")
        document.querySelector("#sec4_img_fixed").classList.remove("fade-in")
        document.querySelector("#sec4_mo_img_fixed").classList.remove("fade-in")
      }
    },
  },
  mounted() {
    document.addEventListener("scroll", this.handleScroll)
    this.handleScroll()
  },
  destroyed() {
    document.removeEventListener("scroll", this.handleScroll)
  },
}
</script>

<style lang="scss" scoped>
// translate(x축 y축) 이동 rotate (deg만큼 기울이기)
.sec5_img_8_move {
  transform: translate(-200px, -200px) rotate(-18deg);
  opacity: 0;
}
</style>
