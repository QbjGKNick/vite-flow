// export const useCounterStore = defineStore("counter", {
//   state: () => {
//     return {
//       count: 0
//     }
//   },
//   actions: {
//     increment(state: any) {
//       this.count++
//     }
//   }
// })

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0)
  const doubleCount = computed(() => {
    return count.value * 2
  })
  
  const changeCount = (playload: number) => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        count.value += playload
        resolve()
      }, 1000)
    })
  }

  return { count, doubleCount, changeCount }
})
