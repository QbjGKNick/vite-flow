- vuex 的缺点 vuex中的 store 是单一的
- 模块方式很恶心 namespaced 整个状态是树状来管理的 store.state.b.c.d -> computed
- actions 和 mutations 的区别，要不要有这个 actions （增加代码，不知道要不要写）
- vuex 不是用 ts 来写的 类型提示我们需要自己再封装
- ... 

- pinia 菠萝  好处多仓库  store -> reactive()  数据源
- 扁平化管理
- actions 和 mutations 只保留 actions
- ts 来编写的 体积小 也是支持 vue2 也有自己的工具
- 不单独支持 optionsApi

export default {
  state,
  getters,
  actions,
  mutations
}

// hook
export function () {
  
}