import { ref } from 'vue';
import assignId from '@/utils/assignId.js';
import useEvents from "@/stores/useEvents.js";

export default (user, initState = []) => {
    const messages = ref([ ...initState ]);

    const { bindEvent, triggerEvent } = useEvents();

    const addMessage = ({ body, sender }) => {
        messages.value.push({
            id: assignId(),
            sender,
            body,
            timestamp: Date.now(),
        });
    };

    const sendMessage = message => triggerEvent('message', { body: message, sender: user });

    const onMessage = callback => bindEvent('message', data => callback(data));

    onMessage(data => addMessage(data));

    return {
        messages,
        addMessage,
        sendMessage,
        onMessage,
        bindEvent,
        triggerEvent,
    };
}
