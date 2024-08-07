import { ref } from 'vue'

const messages = ref<{ id: number, message: string, type: string }[]>([])

function removeMessage(id: number) {
  messages.value = messages.value.filter(msg => msg.id !== id)
}

function addMessage(message: string, type = 'success') {
  const id = Date.now()
  messages.value.push({ id, message, type })
  setTimeout(() => {
    removeMessage(id)
  }, 1800)
}

export function useToaster() {
  return {
    messages,
    addMessage,
    removeMessage,
  }
}
