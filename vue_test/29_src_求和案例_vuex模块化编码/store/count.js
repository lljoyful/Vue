//求和功能相关的配置
export default {
    namespaced: true,
    actions: {
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
        },
        jianEven(context, value) {
            //this是store，context是迷你的store
            // console.log(this, context);
            console.log('jianEven被调用了');
            if (context.state.sum % 2 == 0) {
                context.commit('JIAN', value);
            }
        },
    },
    mutations: {
        JIA(state, value) {
            state.sum += value;
        },
        JIAN(state, value) {
            state.sum -= value;
        },
    },
    state: {
        sum: 0, //当前的和
        school: '尚硅谷',
        subject: '前端',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
};