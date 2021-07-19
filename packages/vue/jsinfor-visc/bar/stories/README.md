<!--
 * @Descripttion: 
 * @version: 
 * @Author: gonghairun
 * @Date: 2020-07-14 13:58:01
 * @LastEditors: gonghairun
 * @LastEditTime: 2020-07-23 14:13:18
--> 
<!-- STORY -->

# 使用
```js
import { Bar } from jsinfor-ui
```
# 代码
<!-- Brief summary of what the component is, and what it's for. -->
```js
<bar 
    :data="data" 
    :yAxisIsShow="yAxisIsShow" 
    :yAxisAxisLine="yAxisAxisLine" 
    :yAxisSplitLine="yAxisSplitLine" 
    :yAxisAxisLabel="yAxisAxisLabel" 
    :title="title" 
    :grid="grid" 
    :legend="legend" 
    :toolTipData="toolTipData" 
    :xAxisIsShow="xAxisIsShow" 
    :xAxisAxisLine="xAxisAxisLine" 
    :xAxisSplitLine="xAxisSplitLine" 
    :xAxisAxisLabel="xAxisAxisLabel"
    :chartHandleClick="chartHandleClick"
    :isHorizontal="isHorizontal"
></bar>

具体值请查看Knobs
```
# API

柱状图的属性说明如下：

<!-- PROPS -->
属性|说明|类型|默认值
:--|:--:|--:|--:
title|标题|string|-
data|柱状图数据源以及x轴数据|object|-
grid|柱状图间距|object|-
legend|图例数据|object|-
toolTipData|浮窗数据|array|-
isHorizontal|是否横向柱状图|boolean|false
xAxisIsShow|是否显示x轴|boolean|true
xAxisAxisLine|x轴轴线相关设置|object|-
xAxisSplitLine|x轴在 grid 区域中的分隔线|object|-
xAxisAxisLabel|x轴刻度标签的相关设置|object|-
yAxisIsShow|是否显示y轴|boolean|false
yAxisAxisLine|y轴轴线相关设置|object|-
yAxisSplitLine|y轴在 grid 区域中的分隔线|object|-
yAxisAxisLabel|y轴刻度标签的相关设置|object|-

事件

事件名称|说明|回调参数
--|:--:|--:
chartHandleClick|点击按钮时的回调|(event) => void