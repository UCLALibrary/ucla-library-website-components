import { onBeforeUnmount, onMounted, unref, type Ref } from "vue"

export function useEventListener<T extends Event>(
    target: EventTarget | Ref<EventTarget | null>,
    event: string,
    handler: (e: T) => void,
    options?: AddEventListenerOptions
) {
    onMounted(() => {
        const el = unref(target)
        el?.addEventListener(event, handler as EventListener, options)
    })

    onBeforeUnmount(() => {
        const el = unref(target)
        el?.removeEventListener(event, handler as EventListener)
    })
}
