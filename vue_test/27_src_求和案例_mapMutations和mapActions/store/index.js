//该文件用于创建Vuex最为核心的store
import Vue from 'vue';
//引入Vuex
import Vuex from 'vuex';
//使用vuex
Vue.use(Vuex);

//准备actions——用于响应组件中的动作
const actions = {
    /* jia(context, value) {
        context.commit('JIA', value);
    },
    jian(context, value) {
        context.commit('JIAN', value);
    }, */
    jiaOdd(context, value) {
        //this是store，context是迷你的store
        // console.log(this, context);
        console.log('jiaOdd被调用了');
        if (context.state.sum % 2) {
            context.commit('JIA', value);
        }

    },
    jiaWait(context, value) {
        console.log('jiaWait被调用了');
        setTimeout(() => {
            context.commit('JIA', value);
        }, 500)
    }
};
//准备mutations——用于操作数据(state)
const mutations = {
    JIA(state, value) {
        state.sum += value;
    },
    JIAN(state, value) {
        state.sum -= value;
    }
};
//准备state——用于存储数据
const state = {
    sum: 0, //当前的和
    school: '尚硅谷',
    subject: '前端'
};
//准备getters——用于将state中的数据进行加工
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

//创建并导出store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
});