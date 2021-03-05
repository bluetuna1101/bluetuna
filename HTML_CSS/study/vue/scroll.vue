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
      // document.querySelector('#section2').offsetHeight ** section2 height나옴
      // window.pageYOffset **지금 내 위치
      // window.scrollY > section3 + window.pageYOffset ? console.log('넘었다!!!') : ''
      const section3 = document
        .querySelector("#section3")
        .getBoundingClientRect().top
      if (section3 < 600) {
        return (this.defaultSectionThree = false)
      }
      if (section3 >= 400) {
        if (!this.sectionTreeTitle) {
          return (this.defaultSectionThree = true)
        }
      }

      const section4 = document
        .querySelector("#section4")
        .getBoundingClientRect().top
      console.log(section4)
      if (section4 < 600) {
        return (this.isDefaultImage = false)
      }
      if (section4 >= 400) {
        if (!this.isDefaultImage) {
          return (this.isDefaultImage = true)
        }
      }
    },
  },
  mounted() {
    document.addEventListener("scroll", this.handleScroll)
    this.handleScroll()
    import("aos").then((AOS) => AOS.init())
  },
  destroyed() {
    document.removeEventListener("scroll", this.handleScroll)
  },
}
</script>

<style></style>
