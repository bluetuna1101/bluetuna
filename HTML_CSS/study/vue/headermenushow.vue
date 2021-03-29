<template>
  <div>
    <div class="head_sec">
      <div class="test_head">
        <button @click="onclickHead">헤더 색션 늘리기!</button>
      </div>
    </div>
    <div class="dim"></div>
    <div class="add_head">안녕</div>
  </div>
</template>

<script>
export default {
  layout: "footer-header-none",
  methods: {
    onclickHead(e) {
      document.querySelector(".dim").classList.toggle("dim_on")
      document.querySelector(".add_head").classList.toggle("add_head_on")
    },
  },
}
</script>

<style lang="scss" scoped>
.head_sec {
  height: 100vh;
  .test_head {
    background: #ececec;
    height: 85px;
    align-items: center;
    display: flex;
    justify-content: center;
    position: fixed;
    width: 100%;
    z-index: 3;
    position: relative;
    cursor: pointer;
  }
}
.dim {
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1;
  height: calc(100% - 85px);
  background: rgba(0, 0, 0, 0.5);
  display: none;
}
.dim_on {
  display: block;
}
.add_head {
  transition: all 0.5s ease;
  position: fixed;
  top: -100px;
  height: 100px;
  background: yellow;
  width: 100%;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}
.add_head_on {
  top: 85px;
}
</style>
