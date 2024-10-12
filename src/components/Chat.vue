<script setup>
import ChatFeed from "@/components/ChatFeed.vue";
import ChatControls from "@/components/ChatControls.vue";
import useChat from "@/composables/useChat.js";

const { user } = defineProps({
  user: { type: Object, required: true },
});

const { messages, sendMessage } = useChat(user);
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
