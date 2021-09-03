<template>
<div id="root">
  <div class="todo-container">
    <div class="todo-wrap">
      <MyHeader @addTodo="addTodo"/>
      <!-- <MyHeader ref="addTodo"/> -->
      <MyList :todos="todos"/>
      <MyFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTode="clearAllTode"/>
    </div>
  </div>
</div>
</template>

<script>
    import pubsub from 'pubsub-js';
    //引入Student组件
    import MyHeader from './components/MyHeader';
    import MyList from './components/MyList';
    import MyFooter from './components/MyFooter';

    export default {
        name:'App',
        components:{MyHeader,MyList,MyFooter},
        data() {
            return {
                todos:JSON.parse(localStorage.getItem('todos'))||[]
            }
        },
        methods: {
          //添加一个todo
          addTodo(todoObj){
            this.todos.unshift(todoObj);
          },
          // 取消勾选1个todo 
          checkTodo(id){
            this.todos.forEach(val=>{
              if(val.id==id)val.done=!val.done;
            })
          },
          //删除一个todo
          deleTodo(_,id){
            this.todos=this.todos.filter(todo=>todo.id!==id)
          },
          //全选or取消全选
          checkAllTodo(done){
            this.todos.forEach(val=>val.done=done)
          },
          //清除所有已经完成的TODO
          clearAllTode(){
            this.todos=this.todos.filter(val=>!val.done);
          }
        },
        watch:{
          todos:{
            deep:true,
            handler(value){
              localStorage.setItem("todos",JSON.stringify(value));
            }
          }
        },
        mounted() {
          // this.$refs.addTodo.$on('addTodo',this.addTodo)

          //绑定事件总线
          this.$bus.$on('checkTodo',this.checkTodo);
          // this.$bus.$on('deleTodo',this.deleTodo);

          //订阅消息
          this.pubId=pubsub.subscribe('deleTodo',this.deleTodo)
        },
        beforeDestroy(){
          this.$bus.$off('checkTodo');
          // this.$bus.$off('deleTodo');

          //取消订阅消息
          pubsub.unsubscribe(this.pubId)
        }
        
    }
</script>

<style>
    /*base*/
    body {
    background: #fff;
    }

    .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    }

    .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
    }

    .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
    }

    .btn:focus {
    outline: none;
    }

    .todo-container {
    width: 600px;
    margin: 0 auto;
    }
    .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    }
</style>