import JsiButton from '../' // 需要写../ 因为index.js导出了组件


export default {
  title: 'jsinfor-visc/JsiSelect',
  component: JsiButton
}

// 返回的是对象 不是函数代码块
export const adminButoon = () => ({
  components: { JsiButton },
  template: '<JsiButton :text="text"></JsiButton>',
  data() {
    return {
      text: 'admin'
    }
  }
})

// 返回的是对象 不是函数代码块
export const userButoon = () => ({
  components: { JsiButton },
  template: '<JsiButton :text="text"></JsiButton>',
  data() {
    return {
      text: 'user'
    }
  }
})