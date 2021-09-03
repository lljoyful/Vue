<template>
  <div>
    <hr/>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入名字" v-model="name">
    <button @click="add">添加</button>
    <button @click="addWang">添加姓王的人</button>
    <ul>
      <li v-for="person in personList" :key="person.id">{{person.name}}</li>
    </ul>
    <h3 style="color:red">Count组件求和为:{{sum}}</h3>
    <h3>列表中第一个人的名字是：{{getFirstName}}</h3>
    <button @click="addPersonServer">添加链接服务器的名字</button>
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
        return this.$store.state.personAbout.personList;
      },
      sum(){
        return this.$store.state.countAbout.sum;
      },
      getFirstName(){
        return this.$store.getters['personAbout/firstPersonName'];
      },
    },
    methods: {
      add(){
        const personObj={
          id:nanoid(), 
          name:this.name,
        }
        this.name='';
        this.$store.commit('personAbout/ADD_PERSON',personObj);
      },
      addWang(){
        console.log('addWang');
        const personObj={
          id:nanoid(),
          name:this.name,
        }
        this.name='';
        this.$store.dispatch('personAbout/addPersonWang',personObj);
      },
      addPersonServer(){
        this.$store.dispatch('personAbout/addPersonServer');
      }
    },
    mounted() {
      // console.log(this.$store.getters);
    },
  }
</script>

<style>

</style>