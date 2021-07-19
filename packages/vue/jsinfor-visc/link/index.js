import JsiLink from './src/link.vue'

JsiLink.install = Vue => {
  Vue.component(JsiLink.name, JsiLink)
}

export default JsiLink
