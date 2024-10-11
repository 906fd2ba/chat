<script setup>
import useChat from "@/composables/useChat.js";
import useEvents from "@/stores/useEvents.js";

import ChatFeed from "@/components/ChatFeed.vue";
import ChatControls from "@/components/ChatControls.vue";

const props = defineProps({
  user: { type: Object, required: true },
});

const { messages, addMessage } = useChat();
const { bindEvent, triggerEvent } = useEvents();

// эмулируем подписку на сокет ивент
// если приходит новое сообщение по сокетам с сервера, то пишем его в стейт текущего чата
bindEvent('newMessage', ({ message, user }) => {
  console.log(`Новое сообщение от пользователя ${user.name}: ${message}`);
  addMessage({ message, user });
});

// эмулируем отправку ивента по сокетам
const sendMessage = message => {
  triggerEvent('newMessage', { message, user: props.user });
};
</script>

<template>
  <div class="chat">
    <div class="chat-user">Чат от лица {{ user.name }}</div>

    <ChatFeed v-bind="{ user, messages }" />

    <ChatControls v-on="{ sendMessage }" />
  </div>
</template>

<style scoped>
.chat-user {
  margin-bottom: 20px;
}
</style>