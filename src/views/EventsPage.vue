<template>
  <v-app>
    <SideBar />
    <div :style="{ 'margin-left': sidebarWidth }">
      <router-view />
      <DashBoard />
      <FooterBar />
    </div>
  </v-app>
</template>

<script>
  import DashBoard from '../components/DashBoard'
  import FooterBar from '../components/FooterBar'
  import SideBar from '../components/sidebar/SideBar'
  import { sidebarWidth } from '@/components/sidebar/state'

  export default {
    name: 'EventHome',

    components: {
      SideBar,
      FooterBar,
      DashBoard
    },
    setup() {
      return { sidebarWidth }
    }
  }
</script>
<style scoped>
.index{
  z-index: 9999;
}
</style>