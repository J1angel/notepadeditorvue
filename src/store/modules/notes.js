import NotesApi from '@/apilinks/notepadapi'
export const notes = {
    namespaced: true,
    state:{
        notes:[],
        current_notes:{
            id:null,
            title:'',
            notes:''
        },
    },
    getters:{
        notes(state){
            return state.notes
        },
        current_notes(state){
            return state.current_notes.notes
        },
        id(state){
            return state.current_notes.id
        },
        title(state){
            return state.current_notes.title
        },
    },

    mutations:{
        notes(state, value){
            state.notes = value
        },
        current_notes(state, value){
            state.current_notes = value
        },
        id(state, value){
            state.current_notes.id = value
        },
        title(state, value) {
            state.current_notes.title = value
        },
        new_current_notes(state,value){
            state.current_notes = value
        }
    },

    actions:{
        changeCurrentNotes({commit},text){
            commit('new_current_notes', text)
        },
        newNotes({commit}){
            let current_notes = {
                id:null,
                    title:'',
                    notes:''
            }
            commit('current_notes', current_notes)
        },
        getNotes({commit}){
            NotesApi.getNotes().then(response => {
                commit('notes', response.data.data)
            }).catch(error => {
                console.log(error)
            })
        },
        updateNote({state}){
            NotesApi.updateNote(state.current_notes).then(response => {
                console.log(response.data)
            }).catch(error => {
                console.log(error)
            })
        }
    }
}
export default notes
