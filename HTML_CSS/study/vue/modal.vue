<template>
  <transition name="modal" appear>
    <div class="modal modal-overlay" @click.self="$emit('close')">
      <div class="modal-window">
        <div style="height: 20px">
          <div style="text-align: right">
            <i
              class="xi-close"
              @click.self="$emit('close')"
              style="cursor: pointer"
            ></i>
          </div>
        </div>
        <div class="modal-content">
          <!-- slot 안의 내용은 가변적으로 가능 -->
          <slot name="content">
            <p class="head_content">모달내용</p>
            <p v-if="is_modal" class="head_content">is_modal의 모달내용</p>
          </slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">
            <div>푸터내용</div>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  //모달을 불러올 페이지에서 is_modal 값을 불러온다
  props: {
    is_modal: Boolean,
  },
}
</script>

<style scoped>
.modal.modal-overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
.modal-window {
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  width: 600px;
  padding: 30px;
}
.modal .xi-close {
  font-size: 20px;
  font-weight: 900;
  color: #bbb;
}
.logobox {
  width: 110px;
  padding: 30px 1px 1px 1px;
  margin: 0 auto;
}
.logobox img {
  width: 100%;
}
.head_content {
  font-size: 18px;
  color: #0086ff;
  font-weight: 500;
  margin-bottom: 15px;
}
.main_content {
  font-size: 45px;
  font-weight: 700;
  line-height: 1.5;
}
.modal-content {
  text-align: center;
}
.modal-footer {
  background: #ffffff;
  text-align: center;
}
.modal-footer button,
a {
  background: #0086ff;
  color: #fff;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  height: 40px;
  margin-top: 10px;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.4s;
}
.modal-enter-active .modal-window,
.modal-leave-active .modal-window {
  transition: opacity 0.4s, transform 0.4s;
}
.modal-leave-active {
  transition: opacity 0.6s ease 0.4s;
}
.modal-enter,
.modal-leave-to {
  opacity: 0;
}
.modal-enter .modal-window,
.modal-leave-to .modal-window {
  opacity: 0;
  transform: translateY(-20px);
}

@media screen and (max-width: 767px) {
  .modal-window {
    width: 340px;
  }
  .head_content {
    font-size: 13px;
  }
  .main_content {
    font-size: 27px;
  }
}
</style>
