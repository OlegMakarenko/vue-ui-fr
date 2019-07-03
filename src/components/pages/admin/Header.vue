<template>
  <div class="top">
    <img
      class="brand"
      src="./backgroundFractal.png"
      alt="fractal"
      style="float: left;
             margin-top: 5px; 
             margin-left: 5px;"
      width="50"
      height="50"
    >
    <div class="header-text">
      <div class="header-brand">Fractal</div>
    </div>

    <!-- <nav>
      <i style="cursor: pointer; 
                font-size: 30px; 
                color: #565656"
        class="fa fa-user-circle-o"
      ></i>
    </nav>-->
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.top {
  background-color: #ffffff;
  width: 100%;
  height: 60px;
  /* padding-top: 15px; */
  padding-bottom: 0px;
  padding-left: 15px;
  padding-right: 15px;
  overflow: auto;
  border-bottom: 2px solid #ebeef5;

  .header-text {
    float: left;
    margin-top: 15px;
    margin-left: 20px;
  }

  .header-brand {
    font-size: 27px;
    color: #565656;
  }
}
</style>