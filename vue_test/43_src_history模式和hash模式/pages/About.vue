<template>
  <div>
    <h2>我是About的内容</h2>
      <ul class="nav nav-tabs">
      <li v-for="shop in shopList" :key="shop.id">
        <!-- <router-link :to="`/about/shopdetail?nameshop=${shop.nameshop}`">{{shop.nameshop}}</router-link> -->
        <!-- <router-link :to="{
          path:'/about/shopdetail',
          query:{
            nameshop:shop.nameshop
          }
        }">
          {{shop.nameshop}}
        </router-link> -->


        <!-- <router-link :to="`/about/shopdetail/${shop.nameshop}`">{{shop.nameshop}}</router-link> -->
        <router-link class="list-group-item" active-class="active" :to="{
          name:'shopdetail',
          params:{
            nameshop:shop.nameshop
          }
        }">
          {{shop.nameshop}}
        </router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name:'About',
    data() {
      return {
        shopList:[
          {id:'001',nameshop:'西装'},
          {id:'002',nameshop:'裙子'},
          {id:'003',nameshop:'衬衫'}
        ]
      }
    },
    mounted() {
      // console.log('About组件挂在完毕',this);
    },
    /* beforeDestroy() {
      console.log('About组件被销毁了');
    }, */
    //通过路由规则，进入该组件时被调用
    beforeRouteEnter (to, from, next) {
      console.log('App--beforeRouteEnter');
      if (to.meta.isAuth) { //判断是否需要鉴定权限
          if (localStorage.getItem('school') === 'guigu') {
              next();
          } else {
              alert('学校名不对，无权查看');
          }
      } else {
          next();
      }
    },
    //通过路由规则，离开该组件时被调用
    beforeRouteLeave (to, from, next) {
      console.log('App--beforeRouteLeave');
      next();
    }
  }
</script>
