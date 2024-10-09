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
// если приходит новое сообщение по сокетам с сервера, то пишем его в стейт
bindEvent('newMessage', ({ message, user }) => {
  console.log(`Новое сообщение от пользователя ${user.name}: ${message}`);
  addMessage({ message, user });
});

// эмулируем отправку ивента по сокетам
const sendMessage = ({ message, user }) => {
  triggerEvent('newMessage', { message, user });
};
</script>

<template>
  <div class="chat">
    <div class="chat-user">Чат от лица {{ user.name }}</div>

    <ChatFeed :user="user" :messages="messages" />

    <ChatControls @sendMessage="sendMessage({ message: $event, user })" />
  </div>
</template>

<style scoped>
.chat-user {
  margin-bottom: 20px;
}
</style>