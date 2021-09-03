<template>
  <div>
    <Count/>
    <TestCount/>
    <Person/>
  </div>
</template>

<script>
  import Count from './components/Count';
  import TestCount from './components/TestCount'
  import Person from './components/Person.vue'
  export default {
    name:'App',
    components:{Count,TestCount,Person},
    mounted() {
      // console.log('App',this);
    },
  }
</script>

