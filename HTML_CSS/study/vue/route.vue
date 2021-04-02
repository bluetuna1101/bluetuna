<template></template>

<script>
export default {
  watch: {
    $route(to, from) {
      // 경로 변경에 반응하여... to 부터 from 까지 움직임을 항상 지켜본다.
      // 페이지 이동시에 호출할 함수를 적어주면 페이지 이동시마다 함수가 실행된다.
    },
  },
}
</script>

<style></style>
