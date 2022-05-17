<template>
  <div class="star" :class="'star-' + size">
    <span
      class="star-item"
      v-for="(sc, index) in starClasses"
      :class="sc"
      :key="index"
    ></span>
  </div>
</template>

<script>
export default {
  name: "Star",
  data() {
    return {
      msg: "",
    };
  },
  props: {
    score: Number,
    size: Number,
  },
  computed: {
    starClasses() {
      const { score } = this;
      const scs = [];
      const scoreInteger = Math.floor(score);
      for (let index = 0; index < scoreInteger; index++) {
        scs.push("on");
      }
      if ((score - scoreInteger) * 10 >= 5) {
        scs.push("half");
      }
      while (scs.length < 5) {
        scs.push("off");
      }
      return scs;
    },
  },
  components: {},
  mounted() {},
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '@/common/stylus/mixins.styl'
.star // 2x图 3x图
  float: left
  font-size: 0
  .star-item
    display: inline-block
    background-repeat: no-repeat
  &.star-48
    .star-item
      width: 20px
      height: 20px
      margin-right: 22px
      background-size: 20px 20px
      &:last-child
        margin-right: 0
      &.on
        bg-image('../../components/Star/images/star48_on')
      &.half
        bg-image('../../components/Star/images/star48_half')
      &.off
        bg-image('../../components/Star/images/star48_off')
  &.star-36
    .star-item
      width: 15px
      height: 15px
      margin-right: 6px
      background-size: 15px 15px
      &:last-child
        margin-right: 0
      &.on
        bg-image('../../components/Star/images/star36_on')
      &.half
        bg-image('../../components/Star/images/star36_half')
      &.off
        bg-image('../../components/Star/images/star36_off')
  &.star-24
    .star-item
      width: 10px
      height: 10px
      margin-right: 3px
      background-size: 10px 10px
      &:last-child
        margin-right: 0
      &.on
        bg-image('../../components/Star/images/star24_on')
      &.half
        bg-image('../../components/Star/images/star24_half')
      &.off
        bg-image('../../components/Star/images/star24_off')
</style>

