//人员管理相关的配置
import axios from 'axios';
import { nanoid } from 'nanoid';
export default {
    namespaced: true,
    actions: {
        addPersonWang(context, value) {
            if (value.name.trim().charAt(0) == '王') {
                console.log('addPersonWang事件');
                context.commit('ADD_PERSON', value)
            }
        },
        addPersonServer(context) {
            axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
                response => {
                    console.log('调用服务器成功了');
                    context.commit('ADD_PERSON', { id: nanoid(), name: response.data });
                },
                error => {
                    console.log('调用服务器失败');
                }
            )
        }
    },
    mutations: {
        ADD_PERSON(state, value) {
            state.personList.unshift(value);
        }
    },
    state: {
        personList: [{
            id: '001',
            name: '张三'
        }]
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name;
        }
    }
};