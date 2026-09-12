import type { Directive } from 'vue'

const listeners = new WeakMap<HTMLImageElement, EventListener>()

export const imageFallback: Directive<HTMLImageElement> = {
  mounted(image) {
    const onError: EventListener = () => {
      image.parentElement?.classList.add('image-fallback')
      image.hidden = true
    }
    listeners.set(image, onError)
    image.addEventListener('error', onError, { once: true })
  },
  unmounted(image) {
    const listener = listeners.get(image)
    if (listener) image.removeEventListener('error', listener)
    listeners.delete(image)
  },
}
