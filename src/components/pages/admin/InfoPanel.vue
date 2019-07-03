<template>
  <div class="info-panel">
    <transition name="slide-fade">
      <!-- the right side where we have Device manager info-->
      <div class="right-side-menu">
        <h3
          style="font-size: 18px; 
                 bold: none; 
                 float: left; 
                 font-weight: 500; 
                 margin-top: 65px; 
                 width: 100px"
        >Project info</h3>

        <div style="width:100%;">
          <input class="device_input" type="text" v-model="selectedId">
          <i class="el-icon-edit" style="font-size:19px"></i>
        </div>

        <p
          style="float: left;
                    text-align: left;
                    color: #9e9e9e;
                    width:80%;
                    margin-left: 5px;"
          class="allp">
          A variety of sizes and densities can be downloaded from this site.
          Our icon set is also available as a git repository make it even
          easier for developers to customize, share and re-use.
        </p>

        <p
          style="float: left;
                    text-align: left;
                    color: #9e9e9e;
                    width:80%;
                    margin-left: 5px;"
          class="allp">
          The best way to use these icons on the web is with our icon web font.
          It`s lightweight, easy to use, and hosted by Google Web Fonts. Learn
          how to use font-based icons in our developer guide.
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },

  methods:{
    
  },
};
</script>

<style lang="scss" scoped>
.info-panel {
  height: 100%;
  width: 300px;
  .slide-fade-enter-active {
    transition: all 0.2s ease;
  }

  .slide-fade-leave-active {
    transition: all 0.2s ease;
  }

  .slide-fade-enter,
  .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
  }

  .right-side-menu {
    width: 100%;
    height: 100%;
    float: right;
    text-align: center;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
  }

  .device_input {
    width: 200px;
    height: 40px;
    font-size: 17px;
    border: none;
    background: transparent;
    text-align: center;
  }
}
</style>

