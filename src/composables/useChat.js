import { ref } from 'vue';
import assignId from '@/utils/assignId.js';

export default (initState = []) => {
    const messages = ref([ ...initState ]);

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
}
