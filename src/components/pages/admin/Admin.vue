<template>
  <div class="admin">
    <Header/>
    <div class="container" v-if="!$store.getters.isLoading">
      <LeftSide/>
      <ContentPanel/>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import LeftSide from "./LeftSide.vue";
import ContentPanel from "./ContentPanel.vue";

export default {
  components: {
    Header,
    LeftSide,
    ContentPanel
  },

  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.admin {
  height: 100%;
  width: 100%;

  .container {
    height: 100%;
    width: 100%;
  }
}
</style>
