
export const notification = {
    namespaced: true,
    state:{
        error:[],
        success:[]
    },
    getters:{
        error(state){
            return state.errors
        },
        success(state){
            return state.success
        },
    },

    mutations:{
        error(state, value){
            state.error.push(value)
        },
        success(state, value){
            state.success.push(value)
        },
    },

    actions:{
        showError({commit},text){
            let status = {
                message: text,
                color:"red darken-4",
                timeout:3000
            }
            commit('error', status)
        },
        showSuccess({commit},text){
            let status = {
                message: text,
                color:"green darken-2",
                timeout:3000
            }
            commit('success', status)
        },
    }
}
export default notification
