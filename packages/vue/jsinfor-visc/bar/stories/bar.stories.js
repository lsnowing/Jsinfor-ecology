
import JsiBar from '../src/bar.vue'
import readme from './README.md'

import { Parameters, Decorators, app } from '@storybook/vue3';
export default {
    title: 'jsinfor-visc/JsiBar',
    component: JsiBar
}

export const Link = () => ({
    components: { JsiBar },
    template: ` <div style="width:100%;height:400px">
        <JsiBar 
            :data="data" 
            :legend="legend" 
            :toolTipData="toolTipData" 
            :chartHandleClick="action"
            :yAxisIsShow="yAxisIsShow"
            :yAxisAxisLine="yAxisAxisLine"
            :yAxisSplitLine="yAxisSplitLine"
            :yAxisAxisLabel="yAxisAxisLabel"
            :title="title" :grid="grid"
            :xAxisIsShow="xAxisIsShow"
            :xAxisAxisLine="xAxisAxisLine"
            :xAxisSplitLine="xAxisSplitLine"
            :xAxisAxisLabel="xAxisAxisLabel">
        </JsiBar>
    </div>
    `,
    props: {
        title: {
            default: "柱状图"
        },
        data: {
            default: () => {
                return {
                    xAxis: ['周一', '周二', '周三', '周四', '周五'],
                    data: [{
                        name: '2018',
                        type: 'bar',
                        data: [200, 200, 300, 400, 500],
                        color: '#589DEB',
                        width: '20%',
                        barGap: 0,
                    },
                    {
                        name: '2019',
                        type: 'bar',
                        data: [300, 200, 200, 400, 400],
                        color: '#00b2d6',
                        width: '20%',
                        barGap: 0,
                    },
                    {
                        name: '2020',
                        type: 'bar',
                        data: [200, 123, 444, 324, 600],
                        color: '#69CBF2',
                        width: '20%',
                        barGap: 0,
                    },
                    ]
                }
            }
        },
        grid: {
            default: () => {
                return {
                    left: 60,
                    right: 20,
                    bottom: 30,
                    top: 50
                }
            }
        },
        legend: {
            default: () => {
                return {
                    show: true,
                    itemGap: 50,
                    itemWidth: 20,
                    itemHeight: 10,
                    icon: 'rect',
                    textStyle: {
                        color: '#333',
                        borderColor: '#333'
                    },
                }
            }
        },
        toolTipData: {
            default: () => {
                return [{
                    name: '周一',
                    list: [{
                        name: '2018销量',
                        value: '1,234万'
                    },
                    {
                        name: '2018达成率',
                        value: '2,222万'
                    },
                    {
                        name: '2018同比',
                        value: '200%'
                    },
                    {
                        name: '2018环比',
                        value: '100%'
                    },
                    {
                        name: '2019销量',
                        value: '1,234万'
                    },
                    {
                        name: '2019达成率',
                        value: '2,222万'
                    },
                    {
                        name: '2019同比',
                        value: '24%'
                    },
                    {
                        name: '2019环比',
                        value: '30%'
                    },
                    {
                        name: '2020销量',
                        value: '1,234万'
                    },
                    {
                        name: '2020达成率',
                        value: '2,222万'
                    },
                    {
                        name: '2020同比',
                        value: "59%"
                    },
                    {
                        name: '2020环比',
                        value: '20%'
                    },
                    ]
                },
                {
                    name: '周二',
                    list: [{
                        name: '2018销量',
                        value: '1,234万'
                    },
                    {
                        name: '2018达成率',
                        value: '2,222万'
                    },
                    {
                        name: '2018同比',
                        value: '200%'
                    },
                    {
                        name: '2018环比',
                        value: '100%'
                    },
                    {
                        name: '2019销量',
                        value: '1,234万'
                    },
                    {
                        name: '2019达成率',
                        value: '2,222万'
                    },
                    {
                        name: '2019同比',
                        value: '24%'
                    },
                    {
                        name: '2019环比',
                        value: '30%'
                    },
                    {
                        name: '2020销量',
                        value: '1,234万'
                    },
                    {
                        name: '2020达成率',
                        value: '2,222万'
                    },
                    {
                        name: '2020同比',
                        value: "59%"
                    },
                    {
                        name: '2020环比',
                        value: '20%'
                    },
                    ]
                },
                ]

            }
        },
        xAxisIsShow: {
            default: true
        },
        xAxisAxisLine: {
            default: () => {
                return {
                    show: true,
                    color: '#333',
                }
            }
        },
        xAxisSplitLine: {
            default: () => {
                return {
                    show: true,
                    color: 'rgba(0,0,0,0.4)',
                    type: 'dotted',
                }
            }
        },
        xAxisAxisLabel: {
            default: () => {
                return {
                    show: true,
                    color: '#333',
                    fontFamily: 'pingfang',
                    fontSize: 14,
                }
            }
        },
        yAxisIsShow: {
            default: true
        },
        yAxisAxisLine: {
            default: () => {
                return {
                    show: true,
                    color: '#333',
                }
            }
        },
        yAxisSplitLine: {
            default: () => {
                return {
                    show: true,
                    color: 'rgba(0,0,0,0.4)',
                    type: 'dotted',
                }
            }
        },
        yAxisAxisLabel: {
            default: () => {
                return {
                    show: true,
                    color: '#333',
                    fontFamily: 'pingfang',
                    fontSize: 14,
                }
            }
        },
    },
    data() {
        return {}
    },
    methods: {
    }
})