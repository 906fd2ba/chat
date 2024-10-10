<script setup>
import User from "@/entities/User.js";
import ChatFeed from "@/components/ChatFeed.vue";
import ChatControls from "@/components/ChatControls.vue";
import useChat from "@/composables/useChat.js";

const userList = [
  new User('user1'),
  new User('user2'),
];

const { messages, addMessage } = useChat();
</script>

<template>
  <div class="container">
    <div class="chat" v-for="user of userList" :key="user.id">
      <div class="chat-user">Чат от лица {{ user.name }}</div>

      <ChatFeed :user="user" :messages="messages" />

      <ChatControls @sendMessage="addMessage({ message: $event, user })" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-evenly;
}

.chat-user {
  margin-bottom: 20px;
}
</style>
