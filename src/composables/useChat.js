import { ref, readonly } from 'vue';
import assignId from '@/utils/assignId.js';
import useEvents from "@/stores/useEvents.js";

export default (user, initState = []) => {
    const messages = ref([ ...initState ]);

    const { bindEvent, triggerEvent } = useEvents();

    const addMessage = ({ id, body, sender }) => {
        messages.value.push({
            id: id ?? assignId(),
            sender,
            body,
            timestamp: Date.now(),
        });
    };

    // эмулируем отправку сообщения по сокетам
    const sendMessage = message => triggerEvent('message', { id: assignId(), body: message, sender: user });

    // эмулируем получение сообщения по сокетам
    const onMessage = callback => bindEvent('message', data => callback(data));

    onMessage(data => addMessage(data));

    return {
        messages: readonly(messages),
        addMessage,
        sendMessage,
        onMessage,
        bindEvent,
        triggerEvent,
    };
}
