//该文件专门用于创建整个应用的路由器
import VueRouter from 'vue-router';
//引入组件
import About from '../pages/About';
import Home from '../pages/Home';
import Message from '../pages/Message'
import News from '../pages/News'
import MessageListLink from '../pages/MessageListLink';
import ShopDetail from '../pages/ShopDetail.vue';

//创建并暴露一个路由器
const router = new VueRouter({
    routes: [{
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: { title: '关于' },
            children: [{
                name: 'shopdetail',
                path: 'shopdetail/:nameshop',
                component: ShopDetail,
                props: true,
                meta: { title: '购物' }
            }]
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta: { title: '主页' },
            children: [{
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta: { isAuth: true, title: '消息' },
                    children: [{
                        name: 'xiangqing',
                        path: 'listlink',
                        component: MessageListLink,
                        //propos的第一种写法,该对象中的所有key-value都会以props的形式传给MessageListLink组件。
                        // props: { a: 1, b: 'hello' }
                        //props的第二种写法:值为布尔值。若布尔值为真，就会把该路由组件收到的所有params参数。以props的形式传给MessageListLink组件，
                        // props: true
                        //props的第二种写法:值为函数
                        /* props($route) {
                            return {
                                id: $route.query.id,
                                title: $route.query.title
                            }
                        } */
                        props({ query: { id, title } }) {
                            return {
                                id,
                                title
                            }
                        },
                        meta: { title: '详情' },
                    }]
                },
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: { isAuth: true, title: '新闻' },
                }
            ]
        },
    ]

});

//全局前置路由守卫--初始化的时候被调用，每次路由切换之前被调用
router.beforeEach((to, from, next) => {
    console.log('beforeEach', to, from);
    if (to.meta.isAuth) { //判断是否需要鉴定权限
        if (localStorage.getItem('school') === 'guigu') {
            // document.title = to.meta.title || '硅谷';
            next();
        } else {
            alert('学校名不对，无权查看');
        }
    } else {
        // document.title = to.meta.title || '硅谷';
        next();
    }
});

//全局后置路由守卫--初始化的时候被调用，每次路由切换之后被调用
/* router.afterEach((to, from) => {
    // console.log('afterEach', to, from);
    document.title = to.meta.title || '硅谷';
}) */

export default router;