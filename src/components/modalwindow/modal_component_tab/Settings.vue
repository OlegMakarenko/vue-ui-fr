<template>
  <div class="settings-panel">

    <div class="settings-panel-container">
      <div class="settings-control-panel">
          Настройки 
      </div>
      <div class="settings-panel-view">
          Какая-то часть контента
      </div>
    </div>

    <div class="settings-info-panel">
        Какая-то информация
    </div>
  </div>
</template>

<script>


export default {
  components: {

  },

  computed: {

  },

  data() {
    return {

    };
  },

  methods: {
    
  }
};
</script>

<style lang="scss" scoped>
.settings-panel {
  display: flex;
  height: 100%;
  width: 100%;
  
  .settings-panel-container {
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 90%;
    background-color: #f5f9fc;

    .settings-control-panel {
      flex: 0 0 auto;
    }

    .settings-panel-view {
      flex: 1 1 auto;
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      overflow: auto;
      padding: 20px;
      background-color: red;
    }
  }

  .settings-info-panel {
    flex: 0 0 auto;
    width: 10%;
    word-wrap:break-word;
    background-color: yellow;
  }
}
</style>
