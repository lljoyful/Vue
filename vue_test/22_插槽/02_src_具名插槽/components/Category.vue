<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <!-- 定义一个插槽(整个坑，等着组件的使用者进行填充 -->
    <slot name="center">默认值，当没有传递的时候出现1</slot>
    <slot name="footer">默认值，当没有传递的时候出现2</slot>

  </div>
</template>

<script>
  export default {
    name:'Category',
    props:['title'],
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
</style>

