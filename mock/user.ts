// 用来 mock 数据的
export default [
  {
    url: "/api/login",
    method: "post",
    response: (res) => {
      // express
      return {
        code: 0, // 0 成功 1 失败
        data: {
          token: "Bearer Token ",
          username: res.body.username
        }
      }
    }
  }
]
