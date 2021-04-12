<template>
  <div>
    <!-- knowhowArr 배열에 일치하는 값이 있어야 버튼이 나옴 -->
    <button v-if="knowhow()" @click="openUrl">이동하기</button>
  </div>
</template>

<script>
export default {
  // 부모로부터 helpModalItem 을 받아옴
  props: ["helpModalItem"],
  data() {
    return {
      // knowhowArr 라는 배열에 일번 이번 삼번을 넣는다
      knowhowArr: ["일번", "이번", "삼번"],
    }
  },
  methods: {
    // num에 helpModalItem 로부터 받아온 데이터와 name을 비교해서 숫자를 받아옴
    goPost() {
      const { num } = this.returnString(this.helpModalItem)

      //받은 숫자를 뒤에 url에 붙임
      window.open(`/post/${num}`)
    },
    // switch case 로 case별 값을 리턴해주고 기본으로 default값을 줌
    // ex) 값이 "일번" 이면 num에 1을 넣어줌
    returnString(str) {
      switch (str) {
        case "일번": {
          return { name: "일번", num: 1 }
        }
        case "이번": {
          return { name: "이번", num: 2 }
        }
        case "삼번": {
          return { name: "삼번", num: 3 }
        }
        case "사번": {
          return { name: "사번", num: 4 }
        }
        case "오번": {
          return { name: "오번", num: 5 }
        }
        case "육번": {
          return { name: "육번", num: 6 }
        }
        case "칠번": {
          return { name: "칠번", num: 7 }
        }
        case "팔번": {
          return { name: "팔번", num: 8 }
        }
        // 일치하는 값이 없을떄 10을 넣는다
        default: {
          return { num: 10 }
        }
      }
    },
    // knowhowArr 배열에 값이 있으면 true 아니면 false 를 내보낸다
    knowhow() {
      return this.knowhowArr.includes(this.helpModalItem)
    },
  },
}
</script>

<style></style>
