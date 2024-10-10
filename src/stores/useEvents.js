import { ref } from "vue";
import { defineStore } from "pinia";

export default defineStore('events', () => {
    const eventList = ref([]);

    const bindEvent = (type, callback) => {
        eventList.value.push({ type, callback });
    };

    const unbindEvent = type => {
        eventList.value = eventList.value.filter(ev => ev.type !== type);
    };

    const triggerEvent = (type, data) => {
        for (let event of eventList.value) {
            if (event.type === type) {
                event.callback(data);
            }
        }
    };

    return {
        eventList,
        bindEvent,
        unbindEvent,
        triggerEvent,
    };
});