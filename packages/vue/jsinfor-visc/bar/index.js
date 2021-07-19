/*
 * @Descripttion: 
 * @version: 
 * @Author: gonghairun
 * @Date: 2020-07-13 15:59:41
 * @LastEditors: gonghairun
 * @LastEditTime: 2020-07-30 14:27:32
 */ 
import bar from './src/bar.vue'

//为组件添加 install 方法，用于按需引入
bar.install = function (Vue) {
    Vue.component(bar.name, bar);
}

export default bar;