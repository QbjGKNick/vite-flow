// import { createApp } from "vue"
import App from "./App.vue"
import router from "./router/index"
// import { login } from "@/api/user"
import "uno.css"
import "@iconify-json/ep"

const app = createApp(App)
app.use(router).use(createPinia()).mount("#app")

// login<{ username: string; password: string }>({
//   username: "hello 帅哥",
//   password: "gknick"
// }).then((res) => {
//   console.log(res.data?.username)
// })
