<template>
  <div class="top">
    <img
      class="brand"
      src="./vega.jpg"
      alt="fractal"
      style="float: left;
             margin-top: 12px;"
      width="180"
      height="35"
    >
    <!-- <div class="header-text">
      <div class="header-brand">Fractal</div>
    </div> -->

    <div class="right-side-header">
      <el-badge :value="0" class="item" style="margin-top:5px;">
       <i style="font-size: 28px; color: #909399; cursor: pointer;" class="el-icon-message-solid"></i>
      </el-badge>

        <el-avatar  size="medium "
          style="cursor: pointer; background: #909399" 
          icon="el-icon-user-solid">
        </el-avatar>
    </div>

    
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.top {
  background-color: #ffffff;
  height: 60px;
  /* padding-top: 15px; */
  padding-bottom: 0px;
  padding-left: 30px;
  padding-right: 30px;
  overflow: auto;
  display: flex;
  justify-content: space-between;


  .header-brand {
    font-size: 27px;
    color: #565656;
  }

  .right-side-header{
    width: 100px;
    float: right;
    display: flex;
    justify-content: space-between;
    //padding-right: 65px;
    margin-top: 12px;
    color: #9e9e9e;
  }
}
</style>