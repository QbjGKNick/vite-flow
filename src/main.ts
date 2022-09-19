import { createApp } from "vue"
import App from "./App.vue"
import router from "./router/index"
import "uno.css"
// import { login } from "@/api/user"

const app = createApp(App)
app.use(router).mount("#app")

// login<{ username: string; password: string }>({
//   username: "hello 帅哥",
//   password: "gknick"
// }).then((res) => {
//   console.log(res.data?.username)
// })
