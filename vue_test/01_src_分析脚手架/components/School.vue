// 

<template>
 <!-- 组件的结构  -->
    <div class="demo">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="showX">带我看实例对象</button>
    </div>
</template>

// 组件交互相关代码
<script>
    // export default  Vue.extend({
    export default {
        name:'School',
        data() {
            return {
                name: '尚硅谷',
                address: '北京'
            }
        },
        methods: {
            showX() {
                console.log(this.name);
            }
        },
    };
</script>

//组件的样式
<style>
    .demo{
       background-color: turquoise; 
    }
</style>
