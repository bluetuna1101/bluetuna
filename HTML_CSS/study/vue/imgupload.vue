<template>
  <div class="chat_tag_wrap">
    <ul class="chat_tag">
      <li>
        <!-- 인풋에 display none을 주고 label 에 이미지 업로드 버튼을 만들어준다 -->
        <label for="file_upload">+</label>
        <input type="file" id="file_upload" v-on:change="handleChange" />
        <!-- <div v-if="preview"><img v-bind:src="preview" /></div> -->
      </li>
      <li class="big_chat_tag">다음</li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    handleChange(e) {
      var file = e.target.files[0]
      if (file && file.type.match(/^image\/(png|jpeg)$/)) {
        this.preview = window.URL.createObjectURL(file)
      }
    },
  },
}
</script>

<style></style>
