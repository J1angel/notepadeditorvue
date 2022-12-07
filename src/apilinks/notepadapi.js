import Api from '@/axios';

export default {
    addNote(data){
        return Api().post('/addnote',data)
    },
    getNotes(){
        return Api().get('/getnotes')
    },
    updateNote(data){
        return Api().put(`/note/${data.id}`, data)
    }
}
