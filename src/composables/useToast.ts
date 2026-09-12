import { ref } from 'vue'

const message = ref('')
const visible = ref(false)
let hideTimer: number | undefined

export function useToast() {
  const showToast = (text: string) => {
    window.clearTimeout(hideTimer)
    message.value = text
    visible.value = true
    hideTimer = window.setTimeout(() => {
      visible.value = false
    }, 2600)
  }

  return { message, visible, showToast }
}
