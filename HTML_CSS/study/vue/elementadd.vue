<template>
  <ul>
    <li @class="createElemental">li 추가하기</li>
  </ul>
</template>

<script>
export default {
  methods: {
    //
    createChat(e) {
      let chatBubble = document.createElement("li")
      chatBubble.classList.add("user_input")
      chatBubble.innerHTML = e.target.innerText
      console.log(chatBubble)
      document.querySelector(".chatlist").appendChild(chatBubble)
    },
  },
}
</script>

<style></style>
