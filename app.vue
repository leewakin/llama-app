<script setup lang="ts">
import ChatSystem from './components/ChatSystem.vue'
import ChatUser from './components/ChatUser.vue'
import ChatAssistant from './components/ChatAssistant.vue'

import { Role } from './constants'

const messages = ref<Message[]>([
  { id: genMessageId(), role: Role.system, content: 'Welcome to the chat!' }
])

const newMessage = ref('')

async function sendMessage() {
  if (!newMessage.value.trim()) return

  messages.value.push({
    id: genMessageId(),
    content: newMessage.value,
    role: Role.user
  })

  newMessage.value = ''

  const data = await $fetch('/api/chat', {
    method: 'POST',
    body: JSON.stringify({
      messages: messages.value
    })
  })

  if (data) {
    messages.value.push({
      ...data[0].message,
      id: genMessageId()
    })
  }
}

function genMessageId() {
  return Date.now()
}
</script>

<template>
  <div class="min-h-screen w-screen">
    <div class="container mx-auto">
      <div class="grid h-screen grid-rows-[1fr,auto] gap-y-2 p-2">
        <ul>
          <li v-for="message in messages" :key="message.id">
            <ChatSystem
              v-if="message.role === Role.system"
              :message="message"
            />
            <ChatUser
              v-else-if="message.role === Role.user"
              :message="message"
            />
            <ChatAssistant
              v-else-if="message.role === Role.assistant"
              :message="message"
            />
          </li>
        </ul>

        <div class="flex flex-col justify-between gap-y-2">
          <UTextarea
            v-model="newMessage"
            autoresize
            autofocus
            :maxrows="6"
            color="primary"
            variant="outline"
            placeholder="Ask a question ..."
            @keydown.ctrl.enter="sendMessage"
          />

          <UButton block @click="sendMessage">
            Send <span class="text-xs">(Ctrl+Enter) </span>
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>
