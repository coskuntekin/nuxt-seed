<script setup lang="ts">
const { messages, removeMessage } = useToaster()
</script>

<template>
  <div
    v-for="msg in messages"
    :key="msg.id"
    :class="msg.type === 'error' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'"
    class="fixed animation-slide-in-right right-4 top-4 flex w-80 max-w-full items-center gap-4 overflow-hidden rounded px-4 py-3 text-sm shadow-lg shadow-slate-500/20 ring-1 ring-inset ring-slate-200"
    role="status"
  >
    <p class="flex-1">
      {{ msg.message }}
    </p>
    <button
      aria-label="Close"
      class="inline-flex h-8 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-full px-4 text-xs font-medium tracking-wide text-slate-500 transition duration-300 hover:bg-slate-200 hover:text-slate-600 focus:bg-slate-300 focus:text-slate-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-slate-600 disabled:shadow-none disabled:hover:bg-transparent"
      @click="removeMessage(msg.id)"
    >
      <span class="relative only:-mx-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
          role="graphics-symbol"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </span>
    </button>
  </div>
</template>
