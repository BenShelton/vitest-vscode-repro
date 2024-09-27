<template>
  <main>
    <p v-text="text" />
    <p v-text="now" />
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { secondsBetween } from '@/utils/time'
import type { Text } from 'types/sample'

export default defineComponent({
  setup () {
    const text = ref<Text>('Hello')

    const now = secondsBetween(10000, 20000)

    return {
      text,
      now,
    }
  },
})
</script>
