<!--
 * @Descripttion: 
 * @version: 
 * @Author: hejiajun
 * @Date: 2021-07-18 18:29:13
 * @LastEditors: hejiajun
 * @LastEditTime: 2021-07-21 17:44:46
-->
<!--  -->
<template>
  <div>
    <button v-text="oText"></button>
    <a-button type="primary">
      Primary
    </a-button>
  </div>
</template>

<script>

export default {
  name: "button2",
  components: {
  },
  props: {
    text: {
      type: String,
      default: "按钮.",
    },
  },
  data() {
    return {
      oText: "按钮",
    };
  },
  watch: {
    text: {
      immediate: true,
      handler(newVal) {
        this.setText(newVal);
      },
    },
  },
  created() {},
  methods: {
    setText(val) {
      this.oText = val;
    },
  },
};
</script>
<style lang='less' scoped>
</style>