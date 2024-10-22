<script setup>
import { provide } from "vue";
import ChatFeed from "@/components/ChatFeed.vue";
import ChatControls from "@/components/ChatControls.vue";
import useChat from "@/composables/useChat.js";

const { user } = defineProps({
  user: { type: Object, required: true },
});

// эмулируем auth/user store (чтобы не пихать юзера пропсами), будто бы этот компонент чата - отдельное приложение
provide('app', { user });

// эмулируем работу чата как в реальной жизни
// каждый компонент чата независим друг от друга, не могут читать стейты друг друга
// поэтому подписываемся на ивент и слушаем новые сообщения
const { messages, sendMessage } = useChat(user);
</script>

<template>
  <div class="chat">
    <div class="chat-user">Чат от лица {{ user.name }}</div>

    <ChatFeed v-bind="{ messages }" />

    <ChatControls @send="sendMessage" />
  </div>
</template>

<style scoped>
.chat-user {
  margin-bottom: 20px;
}
</style>
