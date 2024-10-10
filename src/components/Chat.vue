<script setup>
import useChat from "@/stores/useChat.js";

import ChatFeed from "@/components/ChatFeed.vue";
import ChatControls from "@/components/ChatControls.vue";

const props = defineProps({
  user: { type: Object, required: true },
});

const { messages, addMessage } = useChat();
</script>

<template>
  <div class="chat">
    <div class="chat-user">Чат от лица {{ user.name }}</div>

    <ChatFeed :user="user" :messages="messages" />

    <ChatControls @sendMessage="addMessage({ message: $event, user })" />
  </div>
</template>

<style scoped>
.chat-user {
  margin-bottom: 20px;
}
</style>