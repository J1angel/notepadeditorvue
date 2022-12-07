<template>
  <v-row justify="center">
    <v-dialog
        v-model="dialog"
        persistent
        max-width="600"
    >

      <v-card
          elevation="16"
          class="mx-auto"
      >
        <v-card-title>
          Saved files
        </v-card-title>
        <v-card-text>
          <v-virtual-scroll
              :bench="benched"
              :items="notes"
              height="300"
              item-height="64"
          >
            <template v-slot:default="{ item }">
              <v-list-item :key="item.id" @click="openFile(item)">

                <v-list-item-content>
                  <v-list-item-title>
                    <strong>{{ item.title }}</strong>
                  </v-list-item-title>
                </v-list-item-content>

                <v-list-item-action>
                  <v-icon small>
                    mdi-open-in-new
                  </v-icon>
                </v-list-item-action>
              </v-list-item>

              <v-divider></v-divider>
            </template>
          </v-virtual-scroll>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import {sync} from "vuex-pathify";
import {mapActions} from "vuex";

export default {
  mounted() {
    this.$root.$on('openListDialog', () => {
      this.showDialog()
    })
  },
  data: () => ({
    benched: 0,
    dialog: false
  }),
  computed: {
    notes:sync('Notes/notes')
  },
  methods:{
    ...mapActions({
      openNote:'Notes/changeCurrentNotes',
    }),
    showDialog(){
      this.dialog = true
    },
    openFile(item){
      this.openNote(item)
      this.dialog = false
    }
  }
}
</script>
