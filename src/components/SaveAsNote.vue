<template>
  <div>
    <v-row justify="center">
      <v-dialog
          v-model="dialog"
          persistent
          max-width="600"
      >
        <v-card>
          <v-card-title class="text-h5">
            Save File
          </v-card-title>
          <v-card-text><v-text-field
              label="Title"
              v-model="current_notes.title"
              outlined></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="green darken-1"
                text
                @click="dialog = false"
            >
              Cancel
            </v-btn>
            <v-btn
                color="green darken-1"
                text
                @click="saveAsNote"
            >
              Save
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-snackbars :objects.sync="error_status"  top right>
      <template v-slot:default="{ message }">
        <v-layout align-center pr-4>
          <v-icon class="pr-3" dark large>mdi-robot-angry</v-icon>
          {{ message }}
        </v-layout>
      </template>
    </v-snackbars>
    <v-snackbars :objects.sync="success_status"  top right>
      <template v-slot:default="{ message }">
        <v-layout align-center pr-4>
          <v-icon class="pr-3" dark large>mdi-hand-okay</v-icon>
          {{ message }}
        </v-layout>
      </template>
    </v-snackbars>
  </div>

</template>
<script>
import {sync} from "vuex-pathify";
import NotesApi from "@/apilinks/notepadapi"
import VSnackbars from "v-snackbars";
export default {
  components: {
    "v-snackbars": VSnackbars,
  },
  mounted() {
    this.$root.$on('showDialog', () => {
      this.showDialog()
    })
  },
  computed:{
    current_notes:sync('Notes/current_notes')
  },
  data(){
    return{
      dialog:false,
      error_status:[],
      success_status:[]
    }
  },
  methods:{
    showDialog(){
      this.dialog = true
    },
    saveAsNote(){
      NotesApi.addNote(this.current_notes).then(response => {
        this.dialog = false
        this.error_status.push({
          message: response.data.message,
          color:"green darken-2",
          timeout:3000
        })
      }).catch(error => {
        this.success_status.push({
          message:error.response.data.message,
          color:"red darken-4",
          timeout:3000
        })
      })
    }
  }
}
</script>
