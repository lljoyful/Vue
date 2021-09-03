<template>
    <div class="app">
        <h1>{{msg}}</h1>
        <School/>
        <Student/>
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
            }
        },
    }
</script>

<style scoped>
    .app{
        background-color: #ddd;
        padding: 5px;
    }
</style>