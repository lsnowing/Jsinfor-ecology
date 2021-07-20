<template>
  <div class="chart">
    <div class="title">
      {{title}}
    </div>

    <div class="bar" :id="id">
    </div>
  </div>
</template>



<script>
import * as $echarts from "echarts";

export default {
  name: "bar",
  components: {},
  props: {
    /* 标题 */
    title: {
      type: String,
      default: "柱状图",
    },
    /* 数据 */
    data: {
      type: Object,
    },
    /* 空间距离 */
    grid: {
      type: Object,
      default: () => {
        return {
          left: 70,
          right: 20,
          bottom: 30,
          top: 50,
        };
      },
    },
    /* y轴配置 */
    yAxisIsShow: {
      type: Boolean,
      default: true,
    },
    /* y轴配置 */
    yAxisAxisLine: {
      type: Object,
      default: () => {
        return {
          show: false,
          color: "#333",
        };
      },
    },
    /* y轴配置 */
    yAxisSplitLine: {
      type: Object,
      default: () => {
        return {
          show: false,
          color: "#333",
        };
      },
    },
    /* y轴配置 */
    yAxisAxisLabel: {
      type: Object,
      default: () => {
        return {
          show: false,
          color: "#333",
          fontFamily: "pingfang",
          fontSize: 20,
        };
      },
    },
    /* x轴配置 */
    xAxisIsShow: {
      type: Boolean,
      default: true,
    },
    /* x轴配置 */
    xAxisAxisLine: {
      type: Object,
      default: () => {
        return {
          show: true,
          color: "#333",
        };
      },
    },
    /* x轴配置 */
    xAxisSplitLine: {
      type: Object,
      default: () => {
        return {
          show: false,
          color: "#333",
        };
      },
    },
    /* x轴配置 */
    xAxisAxisLabel: {
      type: Object,
      default: () => {
        return {
          show: true,
          color: "#333",
          fontFamily: "pingfang",
          fontSize: 20,
        };
      },
    },
    /* 图例设置 */
    legend: {
      type: Object,
      default: () => {
        return {
          show: true,
          itemGap: 50,
          itemWidth: 20,
          itemHeight: 10,
          icon: "rect",
          textStyle: {
            color: "#333",
            borderColor: "#333",
          },
        };
      },
    },
    /* 点击事件 */
    chartHandleClick: {
      type: Function,
    },
    /* 弹窗配置 */
    toolTipData: {
      type: Array,
      default: () => {
        return [
          {
            name: "周一",
            list: [
              { name: "2018销量", value: "1,234万" },
              { name: "2018达成率", value: "2,222万" },
              { name: "2018同比", value: "200%" },
              { name: "2018环比", value: "100%" },
              { name: "2019销量", value: "1,234万" },
              { name: "2019达成率", value: "2,222万" },
              { name: "2019同比", value: "24%" },
              { name: "2019环比", value: "30%" },
              { name: "2020销量", value: "1,234万" },
              { name: "2020达成率", value: "2,222万" },
              { name: "2020同比", value: "59%" },
              { name: "2020环比", value: "20%" },
            ],
          },
          {
            name: "周二",
            list: [
              { name: "2018销量", value: "1,234万" },
              { name: "2018达成率", value: "2,222万" },
              { name: "2018同比", value: "200%" },
              { name: "2018环比", value: "100%" },
              { name: "2019销量", value: "1,234万" },
              { name: "2019达成率", value: "2,222万" },
              { name: "2019同比", value: "24%" },
              { name: "2019环比", value: "30%" },
              { name: "2020销量", value: "1,234万" },
              { name: "2020达成率", value: "2,222万" },
              { name: "2020同比", value: "59%" },
              { name: "2020环比", value: "20%" },
            ],
          },
        ];
      },
    },
    /* 是否横向 */
    isHorizontal: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      echarts: $echarts,
      id: "barId",
    };
  },
  computed: {
    dataArray() {
      /* 柱状图配置项 */
      let data = this.data;
      let grid = this.grid;
      let legend = this.legend;
      let toolTipData = this.toolTipData;
      let yAxisIsShow = this.yAxisIsShow;
      let yAxisAxisLine = this.yAxisAxisLine;
      let yAxisSplitLine = this.yAxisSplitLine;
      let yAxisAxisLabel = this.yAxisAxisLabel;
      let xAxisIsShow = this.xAxisIsShow;
      let xAxisAxisLine = this.xAxisAxisLine;
      let xAxisSplitLine = this.xAxisSplitLine;
      let xAxisAxisLabel = this.xAxisAxisLabel;
      let isHorizontal = this.isHorizontal;
      return {
        data,
        grid,
        yAxisIsShow,
        yAxisAxisLine,
        yAxisSplitLine,
        yAxisAxisLabel,
        xAxisIsShow,
        xAxisAxisLine,
        xAxisSplitLine,
        xAxisAxisLabel,
        legend,
        toolTipData,
        isHorizontal,
      };
    },
  },
  watch: {
    dataArray: {
      handler() {
        let _this = this;
        _this.bubbleFun();
      },
      deep: true,
    },
  },
  methods: {
    fontSize(res) {
      let clientWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      if (!clientWidth) return;
      let fontSize = 100 * (clientWidth / 1920);
      return res * fontSize;
    },
    bubbleFun() {
      var _this = this;
      let seriesData = [];
      _this.data.data.map((item, index) => {
        seriesData.push({
          name: item.name,
          type: item.type,
          data: item.data,
          barWidth: item.width,
          yAxisIndex: item.type == "line" ? 1 : 0,
          barGap: item.barGap,
          showSymbol: true,
          symbol: "circle", //设定为实心点
          symbolSize: 6,
          zlevel: index % 2 == 0 ? 2 : 1,
          stack: item.stack,
          itemStyle: {
            normal: {
              color: item.color,
            },
          },
          lineStyle: {
            normal: {
              color: item.color, // 线条颜色
              type: "dotted",
              opacity: 0.6,
            },
            borderColor: "#f0f",
          },
          areaStyle: {
            //区域填充样式
            normal: {
              //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
              color: new _this.echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "rgba(16,90,119,1)",
                  },
                  {
                    offset: 1,
                    color: "rgba(16,90,119,0)",
                  },
                ],
                false
              ),
              // shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
              // shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
            },
          },
          label: {
            normal: {
              show: item.labelIsShow,
              position: "top",
              color: function () {},
              fontFamily: "pingfang",
              fontSize: _this.fontSize(0.12),
              marginTop: 15,
            },
          },
        });
      });
      var option = {
        // tooltip: {},
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
          backgroundColor: "#fff",
          textStyle: {
            color: "#333",
            fontSize: 14,
            align: "left",
            fontFamily: "pingfang",
          },
          borderWidth: 2,
          borderColor: "#fff",
          confine: true,
          extraCssText: "box-shadow:0px 6px 18px 0px rgba(11,29,48,0.55)",
          formatter: function (params) {
            let nameList = [];
            params.map((item) => {
              nameList.push(item.seriesName);
            });
            let relVal = params[0].name + "<br/>";
            _this.toolTipData.map((item) => {
              if (params[0].name == item.name) {
                item.list.map((childItem) => {
                  nameList.map((grandChild) => {
                    if (childItem.name.includes(grandChild)) {
                      relVal +=
                        childItem.name + ":" + childItem.value + "<br/>";
                    }
                  });
                });
              }
            });
            return relVal;
          },
        },
        grid: _this.grid,
        legend: _this.legend,
        // legend: {
        //     show:true,
        //     top:'center',
        //     itemGap: 50,
        //     data: ['注册总量' ,'最新注册量'],
        //     textStyle: {
        //         color: '#f9f9f9',
        //         borderColor: '#333'
        //     },
        // },
        xAxis: {
          type: _this.isHorizontal ? "value" : "category",
          boundaryGap: true,
          show: _this.xAxisIsShow,
          splitLine: {
            show: _this.xAxisSplitLine.show,
            lineStyle: {
              color: _this.xAxisSplitLine.color,
              type: _this.xAxisSplitLine.type,
            },
          },
          axisLine: {
            //坐标轴轴线相关设置。数学上的x轴
            show: _this.xAxisAxisLine.show,
            lineStyle: {
              color: _this.xAxisAxisLine.color,
            },
          },
          axisLabel: {
            show: _this.xAxisAxisLabel.show,
            textStyle: {
              color: _this.xAxisAxisLabel.color,
              fontFamily: _this.xAxisAxisLabel.fontFamily,
              fontSize: _this.xAxisAxisLabel.fontSize,
            },
          },
          axisTick: {
            show: false,
          },
          // data:_this.data.xAxis,
          data: _this.isHorizontal ? null : _this.data.xAxis,
        },
        yAxis: {
          type: _this.isHorizontal ? "category" : "value",
          data: _this.isHorizontal ? _this.data.xAxis : null,
          show: _this.yAxisIsShow,
          splitLine: {
            show: _this.yAxisSplitLine.show,
            lineStyle: {
              color: _this.yAxisSplitLine.color,
              type: _this.yAxisSplitLine.type,
            },
          },
          axisLine: {
            //坐标轴轴线相关设置。数学上的x轴
            show: _this.yAxisAxisLine.show,
            lineStyle: {
              color: _this.yAxisAxisLine.color,
            },
          },
          axisLabel: {
            show: _this.yAxisAxisLabel.show,
            textStyle: {
              color: _this.yAxisAxisLabel.color,
              fontFamily: _this.yAxisAxisLabel.fontFamily,
              fontSize: _this.yAxisAxisLabel.fontSize,
            },
          },
          axisTick: {
            show: false,
            inside: true,
          },
        },
        series: seriesData,
      };
      _this.myChart.setOption(option);
      _this.myChart.on("click", function (params) {
        _this.chartHandleClick(params.name);
      });
    },
  },
  mounted() {
    var _this = this;
    let echarts = _this.echarts;

    _this.myChart = echarts.init(document.getElementById(this.id));
    _this.bubbleFun();
    window.addEventListener("resize", () => {
      _this.myChart.resize();
    });
  },
};
</script>

<style lang="less" scoped>
.chart {
  width: 100%;
  height: 100%;
  .title {
    color: #333;
    font-size: 18px;
  }
  .bar {
    width: 100%;
    height: 100%;
  }
}
</style>