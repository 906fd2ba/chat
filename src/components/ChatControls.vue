<script setup>
import { ref } from "vue";

const text = ref('');
const emit = defineEmits([ 'sendMessage' ]);

const send = () => {
  if (!text.value) return;
  emit('sendMessage', text.value);
  text.value = '';
}
</script>

<template>
  <form class="chat-controls" @submit.prevent="send">
    <textarea class="chat-controls__input" v-model.trim="text" @keydown.enter.exact.prevent="send" />
    <button>Отправить</button>
  </form>
</template>

<style scoped>
.chat-controls {
  display: flex;
  gap: 10px;
  margin-top: 20px;

  textarea {
    resize: none;
    width: 100%;
  }

  input {
    width: 100%;
  }
}
</style>