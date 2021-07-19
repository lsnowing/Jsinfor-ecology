import JsiNnTest from '../src/nn-test.vue'

export default {
  title: 'JsiNnTest',
  component: JsiNnTest
}

export const NnTest = _ => ({
  components: { JsiNnTest },
  template: `
    <div>
      <Jsi-nn-test></Jsi-nn-test>
    </div>
  `
})