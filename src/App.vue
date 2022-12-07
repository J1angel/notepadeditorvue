<template>
  <div id="app" data-app>
    <AppBar></AppBar>
    <v-main><br><br>
      <TextArea></TextArea>
    </v-main>

  </div>
</template>

<script>
import TextArea from '@/components/TextArea'
import AppBar from '@/components/AppBar'
import {sync} from "vuex-pathify";

export default {
  name: 'App',
  computed:{
    errors:sync('Notification/error'),
    success:sync('Notification/success')
  },
  components: {
    TextArea,
    AppBar,
  }
}
</script>


