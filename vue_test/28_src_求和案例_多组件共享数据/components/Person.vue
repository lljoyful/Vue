<template>
  <div>
    <hr/>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add">添加</button>
    <ul>
      <li v-for="person in personList" :key="person.id">{{person.name}}</li>
    </ul>
    <h3 style="color:red">Count组件求和为:{{sum}}</h3>
  </div>
</template>

<script>
  import {nanoid} from 'nanoid';
  export default {
    name:'Person',
    data() {
      return {
        name:''
      }
    },
    computed:{
      personList(){
        return this.$store.state.personList;
      },
      sum(){
        return this.$store.state.sum;
      }
    },
    methods: {
      add(){
        const personObj={
          id:nanoid(),
          name:this.name,
        }
        this.name='';
        this.$store.commit('ADD_PERSON',personObj);
      }
    },
  }
</script>

<style>

</style>