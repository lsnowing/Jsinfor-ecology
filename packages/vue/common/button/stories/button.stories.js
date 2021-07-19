import button2 from '../' // 需要写../ 因为index.js导出了组件


export default {
  title: 'button',
  component: button2
}

// 返回的是对象 不是函数代码块
export const adminButoon = () => ({
  components: { button2 },
  template: '<button2 :text="text"></button2>',
  data() {
    return {
      text: 'admin'
    }
  }
})

// 返回的是对象 不是函数代码块
export const userButoon = () => ({
  components: { button2 },
  template: '<button2 :text="text"></button2>',
  data() {
    return {
      text: 'user'
    }
  }
})