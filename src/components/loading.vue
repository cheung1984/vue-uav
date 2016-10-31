<template lang="html">
    <div class="loading"><p>抽奖中...</p></div>
</template>

<script>
export default {
    data() {
        return {};
    },
    computed: {},
    ready() {},
    attached() {},
    methods: {},
    components: {}
};
</script>

<style lang="css">
  .loading {
      position: fixed;
      z-index: 1003;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 120%;
      text-align: center;
  }

  .loading p {
      position: relative;
      top: 35%;
      display: inline-block;
      min-width: 2.8rem;
      padding: 0.3rem 0.24rem;
      color: #fff;
      font-size: 0.36rem;
      line-height: 0.56rem;
      border-radius: 0.1rem;
      background-color: rgba(0, 0, 0, 0.8);
      text-align: center;
  }
</style>
