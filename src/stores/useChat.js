import { ref } from 'vue';
import { defineStore } from "pinia";
import assignId from '@/utils/assignId.js';

export default defineStore('chat', () => {
    const messages = ref([]);

    const addMessage = ({ user, message }) => {
        messages.value.push({
            id: assignId(),
            sender: user,
            body: message,
            timestamp: Date.now(),
        });
    };

    return {
        messages,
        addMessage,
    };
})
