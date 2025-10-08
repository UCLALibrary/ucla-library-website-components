// composables/useEventListener.ts
import { type Ref, onBeforeUnmount, onMounted, unref } from 'vue'

/**
 * useEventListener composable
 * ----------------------------------------
 * A lightweight, **SSR-safe Vue composable** for automatically registering and
 * cleaning up DOM or custom event listeners on a target. It works with:
 *
 * - Direct EventTargets (e.g. `window`, `document`, or a DOM element)
 * - Vue `ref` targets (useful for template refs)
 * - Lazy functions returning an EventTarget (for SSR safety)
 *
 * This version is fully compatible with **server-side rendering (SSR)** and will
 * not throw `window is not defined` errors. It safely defers all DOM access until
 * after the component is mounted on the client.
 *
 * ---
 * ### 🧠 Why it exists
 * VueUse provides `useEventListener`, but sometimes you need a simpler,
 * framework-agnostic version that:
 * - Works in both client and SSR builds without conditional checks in components.
 * - Supports lazy target resolution (`() => document`) to avoid accessing `window`
 *   or `document` during SSR.
 * - Provides a manual `stop()` function if you need to remove the listener early.
 *
 * ---
 * ### ⚙️ Parameters
 *
 * @template T - The event type extending the base `Event` class.
 *
 * @param {TargetLike} target
 *   The event target to attach the listener to.
 *   - Can be:
 *     - A native `EventTarget` (e.g. `window`, `document`, `element`)
 *     - A Vue `ref<EventTarget | null>` (useful for template refs)
 *     - A lazy function `() => document` (prevents SSR crashes)
 *
 * @param {string} event
 *   The event name to listen for (e.g. `'click'`, `'keydown'`).
 *
 * @param {(e: T) => void} handler
 *   The callback to run when the event is triggered.
 *
 * @param {AddEventListenerOptions} [options]
 *   Optional options passed directly to `addEventListener` (e.g. `{ passive: true }`).
 *
 * ---
 * ### 🧩 Returns
 *
 * @returns {() => void}
 *   A `stop()` function that can be called to manually remove the listener
 *   before the component unmounts.
 *
 * ---
 * ### 🧰 Example Usage
 *
 * **Client-safe keydown listener**
 * ```ts
 * useEventListener<KeyboardEvent>(() => document, 'keydown', (e) => {
 *   if (e.key === 'Escape') console.log('Pressed Esc')
 * })
 * ```
 *
 * **Listening to a ref element**
 * ```vue
 * <template>
 *   <button ref="btnRef">Click me</button>
 * </template>
 *
 * <script setup lang="ts">
 * import { ref } from 'vue'
 * import { useEventListener } from '@/composables/useEventListener'
 *
 * const btnRef = ref<HTMLButtonElement | null>(null)
 *
 * useEventListener(btnRef, 'click', () => {
 *   console.log('Button clicked!')
 * })
 * </script>
 * ```
 *
 * ---
 * ### 💡 Notes
 * - On the server (`typeof window === 'undefined'`), this composable is a no-op.
 * - The listener is automatically cleaned up on `onBeforeUnmount`.
 * - Always prefer passing `() => document` instead of `document` directly in SSR apps.
 */


type TargetLike =
  | EventTarget
  | Ref<EventTarget | null | undefined>
  | (() => EventTarget | null | undefined)

/**
 * SSR-safe event listener hook.
 * - Accepts a lazy target (() => document) so you don't touch `window/document` on the server.
 * - No-ops on SSR.
 * - Returns a `stop()` function for manual cleanup if desired.
 */
export function useEventListener<T extends Event>(
  target: TargetLike,
  event: string,
  handler: (e: T) => void,
  options?: AddEventListenerOptions
): () => void {
  let el: EventTarget | null | undefined
  let stopped = false

  const resolve = (): EventTarget | null | undefined => {
    if (typeof target === 'function') return target()
    return unref(target as Ref<EventTarget | null | undefined>) ?? (target as EventTarget)
  }

  const add = () => {
    if (stopped) return
    el = resolve()
    el?.addEventListener(event, handler as EventListener, options)
  }

  const remove = () => {
    el?.removeEventListener(event, handler as EventListener)
    el = null
  }

  // ✅ Only attach on client
  onMounted(() => {
    if (typeof window === 'undefined') return
    add()
  })

  onBeforeUnmount(() => remove())

  // Optional manual stop
  return () => {
    stopped = true
    remove()
  }
}
