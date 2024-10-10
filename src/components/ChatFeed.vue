<script setup>
import { watch, useTemplateRef, nextTick } from "vue";

const props = defineProps({
  messages: { type: Array, required: true },
  user: { type: Object, required: true },
});

const feed = useTemplateRef('feed');

watch(props.messages, () => {
  nextTick(() => {
    feed.value.scrollTop = feed.value.scrollHeight;
  });
});
</script>

<template>
  <div class="chat-feed" ref="feed">
    <div class="empty" v-if="!messages.length">Нет сообщений</div>
    <template v-else>
      <div class="chat-item" v-for="message of messages" :key="message.id"
           :class="{ isMe: message.sender.id === user.id }">
        <div class="chat-item__text" v-text="message.body" />
      </div>
    </template>
  </div>
</template>

<style scoped>
.chat-feed {
  overflow-y: auto;
  overflow-x: hidden;
  height: 400px;
  padding: 10px;
  place-content: flex-end;
}

.chat-item {
  max-width: 300px;
  word-break: break-word;

  display: flex;
  flex-direction: column;

  align-items: self-start;

  .chat-item__text {
    color: #FFFFFFDE;
    background: cadetblue;
    border-radius: 10px;
    padding: 10px;
    max-width: 80%;
  }

  &.isMe {
    align-items: self-end;

    .chat-item__text {
      background: cornflowerblue;
    }
  }

  &:not(:first-child) {
    margin-top: 10px;
  }
}

.empty {
  text-align: center;
}
</style>