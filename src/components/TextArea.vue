<template>
  <tiptap-vuetify
      v-model="current_notes.notes"
      :extensions="extensions"
      :toolbar-attributes="{ color: 'yellow' }"
  />

</template>
<script>
import {sync} from 'vuex-pathify';
import { TiptapVuetify,
  Heading, Bold, Italic,
  Strike, Underline, Code,
  Paragraph, BulletList, OrderedList,
  ListItem, Link, Blockquote, HardBreak,
  HorizontalRule, History } from 'tiptap-vuetify'
export default {
  components: { TiptapVuetify,
  },
  data(){
    return {
      extensions: [
        History,
        Blockquote,
        Link,
        Underline,
        Strike,
        Italic,
        ListItem,
        BulletList,
        OrderedList,
        [Heading, {
          options: {
            levels: [1, 2, 3]
          }
        }],
        Bold,
        Code,
        HorizontalRule,
        Paragraph,
        HardBreak
      ],
    }
  },
  computed:{
    current_notes:sync('Notes/current_notes'),
  },
}
</script>
<style>
.tiptap-vuetify-editor .ProseMirror {
  min-height: 78vh;
}
</style>
