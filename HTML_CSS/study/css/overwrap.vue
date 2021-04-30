<template>
  <div class="btn_wrap">
    버튼이 opacity_wall 에 겹쳐져서 눌리지 않는다. 그럴땐 덮고있는 엘리먼트에
    pointer-events: none; 을 주어서 통과가 되는 엘리멘트로 만들어준다
    <div class="opacity_wall"></div>
    <button>눌려야할 버튼</button>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.btn_wrap {
  width: 500px;
  position: relative;
  .opacity_wall {
    position: absolute;
    top: 0;
    right: 0;
    background: #fff;
    opacity: 0.5;
    pointer-events: none;
  }
  button {
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    height: 50px;
  }
}
</style>
