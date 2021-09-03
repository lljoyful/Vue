<template>
  <div class="app">
      <h1>{{msg}}，学生姓名是：{{studentName}}</h1>

      <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
      <School :getSchoolName="getSchoolName"/>

      <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第一种写法：使用@或者v-on) -->
      <!-- <Student v-on:atguigu="getStudentName"/> -->
      <!-- <Student @atguigu="getStudentName" @demo="m1"/> -->

      <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第二种写法：使用ref) -->
      <Student ref="student" @click.native="show"/>
  </div>
</template>

<script>
    //引入Student组件
    import School from './components/School';
    import Student from './components/Student.vue';
    export default {
        name:'App',
        components:{School,Student},
        data() {
            return {
                msg:'你好啊',
                studentName:''
            }
        },
        methods: {
            getSchoolName(name){
                console.log('App收到了学校名：'+name);
            },
            getStudentName(name,...args){ 
                console.log('App收到了学生姓名：'+name,args);
                this.studentName=name;
            },
            m1(){
                console.log('demo事件被触发了');
            },
            show(){
                alert(1223)
            }
        },
        mounted() {
            //绑定自定义事件
            this.$refs.student.$on('atguigu',this.getStudentName)
            //这里如果写普通函数，那么这个事件绑定的是是谁，this就指向谁，这里指向的是student
            /* this.$refs.student.$on('atguigu',(name,...args)=>{ 
                console.log('App收到了学生姓名：'+name,args);
                this.studentName=name;
            }) */
           //绑定自定义事件,只触发一次
            //this.$refs.student.$once('atguigu',this.getStudentName)
            
        },
    }
</script>

<style scoped>
    .app{
        background-color: #ddd;
        padding: 5px;
    }
</style>