<template>
  <div>
      <Student name='张三' sex='男' :age="20"/>
  </div>
</template>

<script>
    //引入Student组件
    import Student from './components/Student.vue';
    export default {
        name:'App',
        components:{Student},
        
    }
</script>

