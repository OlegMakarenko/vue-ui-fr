<template>
  <div class="child-component">
    <el-input v-model="newTitle" @change="onNameChange"/>
  </div>
</template>



<script>
export default {
  props: ["id", "title"],

  mounted() {
    this.newTitle = this.title;
  },

  data() {
    return {
      newTitle: null
    };
  },

  methods: {
    onNameChange(e) {
      this.$emit("nameChanged", { id: this.id, newTitle: this.newTitle });
    }
  }
};
</script>



<style>
.child-component {
  height: 200px;
  width: 200px;
}
</style>

