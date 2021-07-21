import JsiRadio from '../' // 需要写../ 因为index.js导出了组件


export default {
  title: 'jsinfor-component/JsiRadio',
  component: JsiRadio
}

// 返回的是对象 不是函数代码块
export const adminRadio = () => ({
  components: { JsiRadio },
  template: '<JsiRadio ></JsiRadio>',
  data() {
    return {
      text: 'admin'
    }
  }
})

