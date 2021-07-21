import JsiRadio from '../'

export default{
  title:'jsinfor-component/JsiRadio',
  component:JsiRadio
}
// 返回的是对象 不是函数代码块
export const adminButoon = () => ({
    components: { JsiRadio },
    template: '<JsiRadio></JsiRadio>',
    data() {
      return{
          text: 'admin'
     }
    }
})