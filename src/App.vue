<script setup>
import User from "@/entities/User.js";
import Chat from "@/components/Chat.vue";

const userList = [
  new User('user1'),
  new User('user2'),
];
</script>

<template>
  <div class="container">
    <Chat v-for="user of userList" :key="user.id" :user="user" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-evenly;
}
</style>
