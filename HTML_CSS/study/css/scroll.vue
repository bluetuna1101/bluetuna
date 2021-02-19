<template>
  <div>
    <h2>best news 모음입니다 !</h2>
    <ul id="ticker_news" class="ticker">
      <li>1 news</li>
      <li>2 news</li>
      <li>3 news</li>
      <li>4 news</li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    tick() {
      $("#ticker_news li:first").slideUp(function () {
        $(this).appendTo($("#ticker_news")).slideDown()
      })
    },
  },
  mounted() {
    setInterval(this.tick, 5000)
  },
  destroyed() {
    // interval 을 쓰면 clearInterval을 꼭 써줘야 한다
    clearInterval(this.tick)
  },
}
</script>

<style></style>
