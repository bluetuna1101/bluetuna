<template>
  <!-- 해더가 조금이라도 움직이면 header_fixed 클래스가 붙게 -->
  <header :class="this.scroll > 0 ? 'header_fixed' : ''"></header>
</template>

<script>
export default {
  data() {
    return {
      scroll: "", // scrollY값
    }
  },
  methods: {
    scrollY() {
      this.scroll = window.pageYOffset
    },
  },
}
</script>

<style lang="scss" scoped></style>
