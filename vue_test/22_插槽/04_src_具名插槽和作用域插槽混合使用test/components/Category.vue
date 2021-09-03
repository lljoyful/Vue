<template>
  <div class="category">
    <h3>{{title}}</h3>
    <slot name="demo01" :games="games" x="hello"></slot>
    <slot name="demo02" :games="games"></slot>
  </div>
</template>

<script>
  export default {
    name:'Category',
    props:['title'],
    data() {
      return {
        games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
      }
    },
  }
</script>

<style scoped>
  .category{
    background-color: skyblue;
    width: 200px;
    height: 300px;
  }
  h3{
    text-align: center;
    background-color: orange;
  }
  img{
    width: 100%;
  }
  span{
    display: block;
    background-color: pink;
  }
</style>

