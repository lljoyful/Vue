<template>
 <!-- 组件的结构  -->
    <div>
        <h2>学生姓名：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
    </div>
</template>

// 组件交互相关代码
<script>
    // export default  Vue.extend({
    export default {
        name:'Student',
        data() {
            return {
                name: '张三',
                age:18
            }
        }
    };
</script>

//组件的样式
<style>
    .demo{
       background-color: turquoise; 
    }
</style>
