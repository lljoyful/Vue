<template>
  <div>
    <hr/>
    <h1>复现一下求和，顺便复习</h1>
    <h3>sum的值是：{{sum}}</h3>
    <h3>sum*10={{bigSum}}</h3>
    <h3>学校：{{school}}</h3>
    <h3>课程：{{kecheng}}</h3>
    <h2>开始用方法辣</h2>
    <button @click="sum2(n)">点击sum+2</button>
    <button @click="sum1(n-1)">点击sum-1</button>
    <button @click="sumEven(n-1)">sum为偶数减1</button>
  </div>
</template>

<script>
  import {mapActions,mapMutations,mapGetters,mapState} from 'vuex';
  export default {
    name:'TestCount',
    data() {
      return {
        n:2
      }
    },
    computed:{
      ...mapState(['school','sum']),
      ...mapState({kecheng:'subject'}),
      ...mapGetters(['bigSum'])
    },
    methods: {
      ...mapMutations({sum2:'JIA',sum1:'JIAN'}),
      ...mapActions({sumEven:'jianEven'}),
    },
  }
</script>

<style>

</style>