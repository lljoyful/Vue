<template>
  <div>
      <h1 v-text="msg" ref="title"></h1>
      <button ref="btn" @click="showDOM">点我输出上方的DOM元素</button>
      <School ref="sch"/>
      <!-- sch是School的vc -->
      
  </div>
</template>

<script>
    //引入school组件
    import App from '../01_src_分析脚手架/App.vue';
    import School from './components/school.vue';
    export default {
        name:'App',
        components:{School},
        data() {
            return {
                msg:'欢迎学习Vue',
            }
        },
        methods: {
            showDOM(){
                console.log(this.$refs.title);//真实DOM元素
                console.log(this.$refs.btn);//真实DOM元素
                console.log(this.$refs.sch);//School组件的实例对象
            }
        },
    }
</script>

