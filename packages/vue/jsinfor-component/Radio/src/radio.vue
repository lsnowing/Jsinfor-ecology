<!--  -->
<template>
  <div>
    

  </div>
</template>

<script>
export default {
  name: "button2",
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