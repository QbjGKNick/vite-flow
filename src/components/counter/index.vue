<template>
  <div flex justify-center>
    <button @click="handleClick" class="block rounded-lg text-black bg-black-1">
      计数器
    </button>
    <span>{{ store.count }}</span>
    <br />
    <span>{{ store.doubleCount }}</span>
  </div>
</template>

<script lang="ts" setup>
import { useCounterStore } from "@/stores/counter"
const store = useCounterStore()

const handleClick = () => {
  store.changeCount(5).then(() => {
    console.log("ok")
  })
}
</script>
