
import bar from '../src/bar.vue'
import readme from './README.md'

// storiesOf('Chart/Bar', module)
//   .addParameters({
//     readme: {
//       // content: readme,
//       sidebar: readme,
//     },
//   })
//   .add('bar', () => {
//     return {
//       components: {
//         bar
//       },
//       props: {
//         title: {
//           default: text('title', '柱状图')
//         },
//         data: {
//           default: object('data', {
//             xAxis: ['周一', '周二', '周三', '周四', '周五'],
//             data: [{
//                 name: '2018',
//                 type: 'bar',
//                 data: [200, 200, 300, 400, 500],
//                 color: '#589DEB',
//                 width: '20%',
//                 barGap: 0,
//               },
//               {
//                 name: '2019',
//                 type: 'bar',
//                 data: [300, 200, 200, 400, 400],
//                 color: '#00b2d6',
//                 width: '20%',
//                 barGap: 0,
//               },
//               {
//                 name: '2020',
//                 type: 'bar',
//                 data: [200, 123, 444, 324, 600],
//                 color: '#69CBF2',
//                 width: '20%',
//                 barGap: 0,
//               },
//             ]
//           })
//         },
//         grid: {
//           default: object('grid', {
//             left: 60,
//             right: 20,
//             bottom: 30,
//             top: 50
//           })
//         },
//         legend: {
//           default: object('legend', {
//             show: true,
//             itemGap: 50,
//             itemWidth: 20,
//             itemHeight: 10,
//             icon: 'rect',
//             textStyle: {
//               color: '#333',
//               borderColor: '#333'
//             },
//           })
//         },
//         toolTipData: {
//           default: object('toolTipData', [{
//               name: '周一',
//               list: [{
//                   name: '2018销量',
//                   value: '1,234万'
//                 },
//                 {
//                   name: '2018达成率',
//                   value: '2,222万'
//                 },
//                 {
//                   name: '2018同比',
//                   value: '200%'
//                 },
//                 {
//                   name: '2018环比',
//                   value: '100%'
//                 },
//                 {
//                   name: '2019销量',
//                   value: '1,234万'
//                 },
//                 {
//                   name: '2019达成率',
//                   value: '2,222万'
//                 },
//                 {
//                   name: '2019同比',
//                   value: '24%'
//                 },
//                 {
//                   name: '2019环比',
//                   value: '30%'
//                 },
//                 {
//                   name: '2020销量',
//                   value: '1,234万'
//                 },
//                 {
//                   name: '2020达成率',
//                   value: '2,222万'
//                 },
//                 {
//                   name: '2020同比',
//                   value: "59%"
//                 },
//                 {
//                   name: '2020环比',
//                   value: '20%'
//                 },
//               ]
//             },
//             {
//               name: '周二',
//               list: [{
//                   name: '2018销量',
//                   value: '1,234万'
//                 },
//                 {
//                   name: '2018达成率',
//                   value: '2,222万'
//                 },
//                 {
//                   name: '2018同比',
//                   value: '200%'
//                 },
//                 {
//                   name: '2018环比',
//                   value: '100%'
//                 },
//                 {
//                   name: '2019销量',
//                   value: '1,234万'
//                 },
//                 {
//                   name: '2019达成率',
//                   value: '2,222万'
//                 },
//                 {
//                   name: '2019同比',
//                   value: '24%'
//                 },
//                 {
//                   name: '2019环比',
//                   value: '30%'
//                 },
//                 {
//                   name: '2020销量',
//                   value: '1,234万'
//                 },
//                 {
//                   name: '2020达成率',
//                   value: '2,222万'
//                 },
//                 {
//                   name: '2020同比',
//                   value: "59%"
//                 },
//                 {
//                   name: '2020环比',
//                   value: '20%'
//                 },
//               ]
//             },
//           ])
//         },
//         xAxisIsShow: {
//           default: boolean('xAxisIsShow', true)
//         },
//         xAxisAxisLine: {
//           default: object('xAxisAxisLine', {
//             show: true,
//             color: '#333',
//           })
//         },
//         xAxisSplitLine: {
//           default: object('xAxisSplitLine', {
//             show: true,
//             color: 'rgba(0,0,0,0.4)',
//             type: 'dotted',
//           })
//         },
//         xAxisAxisLabel: {
//           default: object('xAxisAxisLabel', {
//             show: true,
//             color: '#333',
//             fontFamily: 'pingfang',
//             fontSize: 14,
//           })
//         },
//         yAxisIsShow: {
//           default: boolean('yAxisIsShow', true)
//         },
//         yAxisAxisLine: {
//           default: object('yAxisAxisLine', {
//             show: true,
//             color: '#333',
//           })
//         },
//         yAxisSplitLine: {
//           default: object('yAxisSplitLine', {
//             show: true,
//             color: 'rgba(0,0,0,0.4)',
//             type: 'dotted',
//           })
//         },
//         yAxisAxisLabel: {
//           default: object('yAxisAxisLabel', {
//             show: true,
//             color: '#333',
//             fontFamily: 'pingfang',
//             fontSize: 14,
//           })
//         },
//       },
//       data() {
//         return {}
//       },
//       template: '<div style="width:100%;height:400px"><bar :data="data" :legend="legend" :toolTipData="toolTipData" :chartHandleClick="action" :yAxisIsShow="yAxisIsShow" :yAxisAxisLine="yAxisAxisLine" :yAxisSplitLine="yAxisSplitLine" :yAxisAxisLabel="yAxisAxisLabel" :title="title" :grid="grid" :xAxisIsShow="xAxisIsShow" :xAxisAxisLine="xAxisAxisLine" :xAxisSplitLine="xAxisSplitLine" :xAxisAxisLabel="xAxisAxisLabel"></bar></div>',
//       methods: {
//         action: action('点击柱状图')
//       },
//     }
//   })
//   .add('stackBar', () => {
//     return {
//       components: {
//         bar
//       },
//       props: {
//         title: {
//           default: text('title', '柱状图')
//         },
//         data: {
//           default: object('data', {
//             xAxis: ['周一', '周二', '周三', '周四', '周五'],
//             data: [{
//                 name: '2018',
//                 type: 'bar',
//                 data: [100, 200, 300, 400, 500],
//                 color: '#589DEB',
//                 width: '20%',
//                 stack: 'total',
//                 barGap: 0,
//               },
//               {
//                 name: '2019',
//                 type: 'bar',
//                 data: [100, 200, 300, 400, 500],
//                 color: '#00b2d6',
//                 width: '20%',
//                 stack: 'total'
//               },
//               {
//                 name: '2020',
//                 type: 'bar',
//                 data: [100, 200, 300, 400, 500],
//                 color: '#69CBF2',
//                 width: '20%',
//               },
//             ]
//           })
//         },
//         grid: {
//           default: object('grid', {
//             left: 60,
//             right: 20,
//             bottom: 30,
//             top: 50
//           })
//         },
//         legend: {
//           default: object('legend', {
//             show: true,
//             itemGap: 50,
//             itemWidth: 20,
//             itemHeight: 10,
//             icon: 'rect',
//             textStyle: {
//               color: '#333',
//               borderColor: '#333'
//             },
//           })
//         },
//         toolTipData: {
//           default: object('toolTipData', [{
//               name: '周一',
//               list: [{
//                   name: '2018销量',
//                   value: '1,234万'
//                 },
//                 {
//                   name: '2018达成率',
//                   value: '2,222万'
//                 },
//                 {
//                   name: '2018同比',
//                   value: '200%'
//                 },
//                 {
//                   name: '2018环比',
//                   value: '100%'
//                 },
//                 {
//                   name: '2019销量',
//                   value: '1,234万'
//                 },
//                 {
//                   name: '2019达成率',
//                   value: '2,222万'
//                 },
//                 {
//                   name: '2019同比',
//                   value: '24%'
//                 },
//                 {
//                   name: '2019环比',
//                   value: '30%'
//                 },
//                 {
//                   name: '2020销量',
//                   value: '1,234万'
//                 },
//                 {
//                   name: '2020达成率',
//                   value: '2,222万'
//                 },
//                 {
//                   name: '2020同比',
//                   value: "59%"
//                 },
//                 {
//                   name: '2020环比',
//                   value: '20%'
//                 },
//               ]
//             },
//             {
//               name: '周二',
//               list: [{
//                   name: '2018销量',
//                   value: '1,234万'
//                 },
//                 {
//                   name: '2018达成率',
//                   value: '2,222万'
//                 },
//                 {
//                   name: '2018同比',
//                   value: '200%'
//                 },
//                 {
//                   name: '2018环比',
//                   value: '100%'
//                 },
//                 {
//                   name: '2019销量',
//                   value: '1,234万'
//                 },
//                 {
//                   name: '2019达成率',
//                   value: '2,222万'
//                 },
//                 {
//                   name: '2019同比',
//                   value: '24%'
//                 },
//                 {
//                   name: '2019环比',
//                   value: '30%'
//                 },
//                 {
//                   name: '2020销量',
//                   value: '1,234万'
//                 },
//                 {
//                   name: '2020达成率',
//                   value: '2,222万'
//                 },
//                 {
//                   name: '2020同比',
//                   value: "59%"
//                 },
//                 {
//                   name: '2020环比',
//                   value: '20%'
//                 },
//               ]
//             },
//           ])
//         },
//         xAxisIsShow: {
//           default: boolean('xAxisIsShow', true)
//         },
//         xAxisAxisLine: {
//           default: object('xAxisAxisLine', {
//             show: true,
//             color: '#333',
//           })
//         },
//         xAxisSplitLine: {
//           default: object('xAxisSplitLine', {
//             show: true,
//             color: 'rgba(0,0,0,0.4)',
//             type: 'dotted',
//           })
//         },
//         xAxisAxisLabel: {
//           default: object('xAxisAxisLabel', {
//             show: true,
//             color: '#333',
//             fontFamily: 'pingfang',
//             fontSize: 14,
//           })
//         },
//         yAxisIsShow: {
//           default: boolean('yAxisIsShow', true)
//         },
//         yAxisAxisLine: {
//           default: object('yAxisAxisLine', {
//             show: true,
//             color: '#333',
//           })
//         },
//         yAxisSplitLine: {
//           default: object('yAxisSplitLine', {
//             show: true,
//             color: 'rgba(0,0,0,0.4)',
//             type: 'dotted',
//           })
//         },
//         yAxisAxisLabel: {
//           default: object('yAxisAxisLabel', {
//             show: true,
//             color: '#333',
//             fontFamily: 'pingfang',
//             fontSize: 14,
//           })
//         },
//       },
//       data() {
//         return {}
//       },
//       template: '<div style="width:100%;height:400px"><bar :data="data" :legend="legend" :toolTipData="toolTipData" :chartHandleClick="action" :yAxisIsShow="yAxisIsShow" :yAxisAxisLine="yAxisAxisLine" :yAxisSplitLine="yAxisSplitLine" :yAxisAxisLabel="yAxisAxisLabel" :title="title" :grid="grid" :xAxisIsShow="xAxisIsShow" :xAxisAxisLine="xAxisAxisLine" :xAxisSplitLine="xAxisSplitLine" :xAxisAxisLabel="xAxisAxisLabel"></bar></div>',
//       methods: {
//         action: action('点击柱状图')
//       },
//     }
//   })
//   .add('horizontalBar', () => {
//     return {
//       components: {
//         bar
//       },
//       props: {
//         title: {
//           default: text('title', '柱状图')
//         },
//         data: {
//           default: object('data', {
//             xAxis: ['周一', '周二', '周三', '周四', '周五'],
//             data: [{
//                 name: '2018',
//                 type: 'bar',
//                 data: [231, 114, 551, 334, 222],
//                 color: '#589DEB',
//                 width: '20%',
//                 barGap: 0,
//               },
//               {
//                 name: '2019',
//                 type: 'bar',
//                 data: [111, 333, 555, 111, 567],
//                 color: '#00b2d6',
//                 width: '20%',
//               },
//               {
//                 name: '2020',
//                 type: 'bar',
//                 data: [100, 200, 300, 400, 500],
//                 color: '#69CBF2',
//                 width: '20%',
//               },
//             ]
//           })
//         },
//         isHorizontal: {
//           default: boolean('isHorizontal', true)
//         },
//         grid: {
//           default: object('grid', {
//             left: 60,
//             right: 20,
//             bottom: 30,
//             top: 50
//           })
//         },
//         legend: {
//           default: object('legend', {
//             show: true,
//             itemGap: 50,
//             itemWidth: 20,
//             itemHeight: 10,
//             icon: 'rect',
//             textStyle: {
//               color: '#333',
//               borderColor: '#333'
//             },
//           })
//         },
//         toolTipData: {
//           default: object('toolTipData', [{
//               name: '周一',
//               list: [{
//                   name: '2018销量',
//                   value: '1,234万'
//                 },
//                 {
//                   name: '2018达成率',
//                   value: '2,222万'
//                 },
//                 {
//                   name: '2018同比',
//                   value: '200%'
//                 },
//                 {
//                   name: '2018环比',
//                   value: '100%'
//                 },
//                 {
//                   name: '2019销量',
//                   value: '1,234万'
//                 },
//                 {
//                   name: '2019达成率',
//                   value: '2,222万'
//                 },
//                 {
//                   name: '2019同比',
//                   value: '24%'
//                 },
//                 {
//                   name: '2019环比',
//                   value: '30%'
//                 },
//                 {
//                   name: '2020销量',
//                   value: '1,234万'
//                 },
//                 {
//                   name: '2020达成率',
//                   value: '2,222万'
//                 },
//                 {
//                   name: '2020同比',
//                   value: "59%"
//                 },
//                 {
//                   name: '2020环比',
//                   value: '20%'
//                 },
//               ]
//             },
//             {
//               name: '周二',
//               list: [{
//                   name: '2018销量',
//                   value: '1,234万'
//                 },
//                 {
//                   name: '2018达成率',
//                   value: '2,222万'
//                 },
//                 {
//                   name: '2018同比',
//                   value: '200%'
//                 },
//                 {
//                   name: '2018环比',
//                   value: '100%'
//                 },
//                 {
//                   name: '2019销量',
//                   value: '1,234万'
//                 },
//                 {
//                   name: '2019达成率',
//                   value: '2,222万'
//                 },
//                 {
//                   name: '2019同比',
//                   value: '24%'
//                 },
//                 {
//                   name: '2019环比',
//                   value: '30%'
//                 },
//                 {
//                   name: '2020销量',
//                   value: '1,234万'
//                 },
//                 {
//                   name: '2020达成率',
//                   value: '2,222万'
//                 },
//                 {
//                   name: '2020同比',
//                   value: "59%"
//                 },
//                 {
//                   name: '2020环比',
//                   value: '20%'
//                 },
//               ]
//             },
//           ])
//         },
//         xAxisIsShow: {
//           default: boolean('xAxisIsShow', true)
//         },
//         xAxisAxisLine: {
//           default: object('xAxisAxisLine', {
//             show: true,
//             color: '#333',
//           })
//         },
//         xAxisSplitLine: {
//           default: object('xAxisSplitLine', {
//             show: true,
//             color: 'rgba(0,0,0,0.4)',
//             type: 'dotted',
//           })
//         },
//         xAxisAxisLabel: {
//           default: object('xAxisAxisLabel', {
//             show: true,
//             color: '#333',
//             fontFamily: 'pingfang',
//             fontSize: 14,
//           })
//         },
//         yAxisIsShow: {
//           default: boolean('yAxisIsShow', true)
//         },
//         yAxisAxisLine: {
//           default: object('yAxisAxisLine', {
//             show: true,
//             color: '#333',
//           })
//         },
//         yAxisSplitLine: {
//           default: object('yAxisSplitLine', {
//             show: true,
//             color: 'rgba(0,0,0,0.4)',
//             type: 'dotted',
//           })
//         },
//         yAxisAxisLabel: {
//           default: object('yAxisAxisLabel', {
//             show: true,
//             color: '#333',
//             fontFamily: 'pingfang',
//             fontSize: 14,
//           })
//         },
//       },
//       data() {
//         return {}
//       },
//       template: '<div style="width:100%;height:400px"><bar :data="data" :isHorizontal="isHorizontal" :legend="legend" :toolTipData="toolTipData" :chartHandleClick="action" :yAxisIsShow="yAxisIsShow" :yAxisAxisLine="yAxisAxisLine" :yAxisSplitLine="yAxisSplitLine" :yAxisAxisLabel="yAxisAxisLabel" :title="title" :grid="grid" :xAxisIsShow="xAxisIsShow" :xAxisAxisLine="xAxisAxisLine" :xAxisSplitLine="xAxisSplitLine" :xAxisAxisLabel="xAxisAxisLabel"></bar></div>',
//       methods: {
//         action: action('点击柱状图')
//       },
//     }
//   })
//   .add('horizontalStackBar', () => {
//     return {
//       components: {
//         bar
//       },
//       props: {
//         title: {
//           default: text('title', '柱状图')
//         },
//         data: {
//           default: object('data', {
//             xAxis: ['周一', '周二', '周三', '周四', '周五'],
//             data: [{
//                 name: '2018',
//                 type: 'bar',
//                 data: [100, 200, 300, 400, 500],
//                 color: '#589DEB',
//                 width: '40%',
//                 stack: 'total',
//                 barGap: 0,
//               },
//               {
//                 name: '2019',
//                 type: 'bar',
//                 data: [100, 200, 300, 400, 500],
//                 color: '#00b2d6',
//                 width: '40%',
//                 stack: 'total'
//               },
//               {
//                 name: '2020',
//                 type: 'bar',
//                 data: [100, 200, 300, 400, 500],
//                 color: '#69CBF2',
//                 width: '40%',
//               },
//             ]
//           })
//         },
//         isHorizontal: {
//           default: boolean('isHorizontal', true)
//         },
//         grid: {
//           default: object('grid', {
//             left: 60,
//             right: 20,
//             bottom: 30,
//             top: 50
//           })
//         },
//         legend: {
//           default: object('legend', {
//             show: true,
//             itemGap: 50,
//             itemWidth: 20,
//             itemHeight: 10,
//             icon: 'rect',
//             textStyle: {
//               color: '#333',
//               borderColor: '#333'
//             },
//           })
//         },
//         tooltip: {
//           default: object('tooltip', {
//             trigger: 'axis',
//             axisPointer: {
//               type: 'shadow'
//             },
//             backgroundColor: '#fff',
//             textStyle: {
//               color: '#333',
//               fontSize: 14,
//               align: 'left',
//               fontFamily: 'pingfang'
//             },
//             borderWidth: 2,
//             borderColor: '#fff',
//             confine: true,
//             extraCssText: 'box-shadow:0px 6px 18px 0px rgba(11,29,48,0.55)',
//           })
//         },
//         toolTipData: {
//           default: object('toolTipData', [{
//               name: '周一',
//               list: [{
//                   name: '2018销量',
//                   value: '1,234万'
//                 },
//                 {
//                   name: '2018达成率',
//                   value: '2,222万'
//                 },
//                 {
//                   name: '2018同比',
//                   value: '200%'
//                 },
//                 {
//                   name: '2018环比',
//                   value: '100%'
//                 },
//                 {
//                   name: '2019销量',
//                   value: '1,234万'
//                 },
//                 {
//                   name: '2019达成率',
//                   value: '2,222万'
//                 },
//                 {
//                   name: '2019同比',
//                   value: '24%'
//                 },
//                 {
//                   name: '2019环比',
//                   value: '30%'
//                 },
//                 {
//                   name: '2020销量',
//                   value: '1,234万'
//                 },
//                 {
//                   name: '2020达成率',
//                   value: '2,222万'
//                 },
//                 {
//                   name: '2020同比',
//                   value: "59%"
//                 },
//                 {
//                   name: '2020环比',
//                   value: '20%'
//                 },
//               ]
//             },
//             {
//               name: '周二',
//               list: [{
//                   name: '2018销量',
//                   value: '1,234万'
//                 },
//                 {
//                   name: '2018达成率',
//                   value: '2,222万'
//                 },
//                 {
//                   name: '2018同比',
//                   value: '200%'
//                 },
//                 {
//                   name: '2018环比',
//                   value: '100%'
//                 },
//                 {
//                   name: '2019销量',
//                   value: '1,234万'
//                 },
//                 {
//                   name: '2019达成率',
//                   value: '2,222万'
//                 },
//                 {
//                   name: '2019同比',
//                   value: '24%'
//                 },
//                 {
//                   name: '2019环比',
//                   value: '30%'
//                 },
//                 {
//                   name: '2020销量',
//                   value: '1,234万'
//                 },
//                 {
//                   name: '2020达成率',
//                   value: '2,222万'
//                 },
//                 {
//                   name: '2020同比',
//                   value: "59%"
//                 },
//                 {
//                   name: '2020环比',
//                   value: '20%'
//                 },
//               ]
//             },
//           ])
//         },
//         xAxisIsShow: {
//           default: boolean('xAxisIsShow', true)
//         },
//         xAxisAxisLine: {
//           default: object('xAxisAxisLine', {
//             show: true,
//             color: '#333',
//           })
//         },
//         xAxisSplitLine: {
//           default: object('xAxisSplitLine', {
//             show: true,
//             color: 'rgba(0,0,0,0.4)',
//             type: 'dotted',
//           })
//         },
//         xAxisAxisLabel: {
//           default: object('xAxisAxisLabel', {
//             show: true,
//             color: '#333',
//             fontFamily: 'pingfang',
//             fontSize: 14,
//           })
//         },
//         yAxisIsShow: {
//           default: boolean('yAxisIsShow', true)
//         },
//         yAxisAxisLine: {
//           default: object('yAxisAxisLine', {
//             show: true,
//             color: '#333',
//           })
//         },
//         yAxisSplitLine: {
//           default: object('yAxisSplitLine', {
//             show: true,
//             color: 'rgba(0,0,0,0.4)',
//             type: 'dotted',
//           })
//         },
//         yAxisAxisLabel: {
//           default: object('yAxisAxisLabel', {
//             show: true,
//             color: '#333',
//             fontFamily: 'pingfang',
//             fontSize: 14,
//           })
//         },
//       },
//       data() {
//         return {}
//       },
//       template: '<div style="width:100%;height:400px"><bar :data="data" :isHorizontal="isHorizontal" :legend="legend" :toolTipData="toolTipData" :chartHandleClick="action" :yAxisIsShow="yAxisIsShow" :yAxisAxisLine="yAxisAxisLine" :yAxisSplitLine="yAxisSplitLine" :yAxisAxisLabel="yAxisAxisLabel" :title="title" :grid="grid" :xAxisIsShow="xAxisIsShow" :xAxisAxisLine="xAxisAxisLine" :xAxisSplitLine="xAxisSplitLine" :xAxisAxisLabel="xAxisAxisLabel"></bar></div>',
//       methods: {
//         action: action('点击柱状图')
//       },
//     }
//   })