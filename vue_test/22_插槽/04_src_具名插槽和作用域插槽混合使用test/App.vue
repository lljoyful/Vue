<template>
  <div class="container">
    <Category title="游戏">
      <!-- <template slot="demo01" slot-scope="demo"> -->
      <!-- <template slot="demo01" slot-scope="{games}"> -->
      <template slot="demo01" slot-scope="{games}">
        <ul>
          <li v-for="(g,index) in games" :key="index">{{g}}</li>
        </ul>
        <!-- <div slot="demo02">{{demo}}</div> -->
      </template>
      <template v-slot:demo02>
        <span>hahah</span>
      </template>
    </Category>

    <Category>
      <template slot="demo01" slot-scope="{x}">
        <span>{{x}}</span>
      </template>
    </Category>
  </div>
</template>

<script>
  import Category from './components/Category';
  export default {
    name:'App',
    components:{Category},
    
  }
</script>

<style scoped>
  .container,.foot{
    display: flex;
    justify-content: space-around;
  }
  h4{
    text-align: center;
  }
</style>