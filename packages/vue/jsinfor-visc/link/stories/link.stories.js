import JsiLink from '../' // 需要写../ 因为index.js导出了组件


export default {
  title: 'jsinfor-visc/JsiLink',
  component: JsiLink
}

// 返回的是对象 不是函数代码块
export const adminButoon = () => ({
  components: { JsiLink },
  template: '<jsiLink @click="message"></jsiLink>',
  data() {
    return {
      text: 'admin'
    }
  },
  methods: {
    message() {
      alert(123)
    }
  }
})

// 返回的是对象 不是函数代码块
export const userButoon = () => ({
  components: { JsiLink },
  template: '<JsiLink @click="message"></JsiLink>',
  data() {
    return {
      text: 'user'
    }
  },
  methods: {
    message() {
      alert(456)
    }
  }
})