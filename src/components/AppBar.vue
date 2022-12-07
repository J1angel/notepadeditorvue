<template>
  <div>
    <v-app-bar
        color="brown lighten-5"
        dense
        app
    >
      <v-menu
          left
          bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
              plain
              v-bind="attrs"
              v-on="on"
          >
           File <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="newFile"><v-list-item-title><v-icon>mdi-file</v-icon>New</v-list-item-title></v-list-item>
          <v-list-item @click="openFile"><v-list-item-title><v-icon>mdi-folder</v-icon>Open</v-list-item-title></v-list-item>
          <v-list-item @click="saveFile"><v-list-item-title><v-icon>mdi-tray-arrow-down</v-icon>Save</v-list-item-title></v-list-item>
          <v-list-item @click="saveAsFile"><v-list-item-title><v-icon>mdi-tray-arrow-down</v-icon>Save As</v-list-item-title></v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <SaveAsNote></SaveAsNote>
    <NotesList></NotesList>
  </div>
</template>
<script>
import {mapActions} from 'vuex';
import {get} from 'vuex-pathify';
import SaveAsNote from '@/components/SaveAsNote';
import NotesList from '@/components/NotesList';

export default {
  components:{
    NotesList,
    SaveAsNote
  },
  computed:{
    id:get('Notes/id')
  },
  methods:{
    ...mapActions({
      newNotes:'Notes/newNotes',
      getNotes:'Notes/getNotes',
      updateNote:'Notes/updateNote'
    }),
    newFile(){
      this.newNotes()
    },
    openFile(){
      this.getNotes()
      this.$root.$emit('openListDialog')
    },
    saveFile(){
      if (this.id === null){
        this.saveAsFile()
      }else{
        this.updateNote()
      }

    },
    saveAsFile(){
      this.$root.$emit('showDialog')
    }
  }
}
</script>
