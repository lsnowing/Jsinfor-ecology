import JsiLink from '../src/link.vue'

export default {
  title: 'JsiLink',
  component: JsiLink
}

export const Link = _ => ({
  components: { JsiLink },

  template: `
    <div>
      <Jsi-link @click="login"></Jsi-link>
    </div>
  `,
  methods: {
    login() {
      alert(1);
    }
  }
})


export const Link2 = _ => ({
  components: { JsiLink },
  template: `
    <div>
      <Jsi-link @click="login"></Jsi-link>
    </div>
  `,
  methods: {
    login() {
      alert(2);
    }
  }
})