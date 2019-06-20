<template>
  <div class="events_manager">
    <div class="events_header">
      Регулятор в пристройке <br><br>
      События
    </div>

    <div class="events_settings">
      <div class="events_type">
        <h class="content_type">Тип события</h>
        <h class="content_type">Причина события</h>
        <h class="content_type">Время события</h>
      </div>
    </div>

    <div class="about_events">
        <div class="events_content_first">
          <h style="margin-top: 2.5%; color: #a0c1f1">Переход в ручной режим</h>
          <h style="margin-top: 2.5%; color: #a0c1f1">Пользователь</h>
          <h style="margin-top: 1%; color: #a0c1f1">21:13<br>04.03.2019</h>
        </div>
        
        
        <div class="events_content">
         <h style="margin-top: 2.5%; color:yellow">Переход в ручной режим</h>
          <h style="margin-top: 2.5%; color: #a0c1f1">Пользователь</h>
          <h style="margin-top: 1%; color: #a0c1f1">21:13<br>04.03.2019</h>
        </div>
        
        <div class="events_content">
          <h style="margin-top: 2.5%; color:yellow">Переход в ручной режим</h>
          <h style="margin-top: 2.5%; color: #a0c1f1">Пользователь</h>
          <h style="margin-top: 1%; color: #a0c1f1">21:13<br>04.03.2019</h>
        </div>

        <div class="events_content">
          <h style="margin-top: 2.5%; color: #a0c1f1">Переход в ручной режим</h>
          <h style="margin-top: 2.5%; color: #a0c1f1">Пользователь</h>
          <h style="margin-top: 1%; color: #a0c1f1">21:13<br>04.03.2019</h>
        </div>

        <div class="events_content">
          <h style="margin-top: 2.5%; color: red">Переход в ручной режим</h>
          <h style="margin-top: 2.5%; color: #a0c1f1">Пользователь</h>
          <h style="margin-top: 1%; color: #a0c1f1">21:13<br>04.03.2019</h>
        </div>

        <div class="events_content">
          <h style="margin-top: 2.5%; color: red">Переход в ручной режим</h>
          <h style="margin-top: 2.5%; color: #a0c1f1">Пользователь</h>
          <h style="margin-top: 1%; color: #a0c1f1">21:13<br>04.03.2019</h>
        </div>
      </div>
  </div>
</template>

<script>
export default{
  data(){
    return{

    }
  }
}
</script>

<style>
.events_manager{
  margin-left: 12.4%;
  width: 72%;
  height: 100%;
}

.events_header{
  width: 100%; 
  height: 10%;
  text-align: center;
}

.events_settings{
  width: 100%;
  height: 4%;
  margin-top: 5%;
  margin-left: 3%;
}

.events_type{
    width: 100%;
    height: 8%;
    /* margin-top: 10%; */
    /* margin-right: 14.9%; */
    float: right;
    display: flex;
    justify-content: space-around;
    /* flex-direction: row;
    flex-wrap: wrap;
    align-content: stretch; */
}

.content_type{
  color: #c0d3ef;
}

.about_events{
  width: 100%;
  height:75.5%;
  margin-top: 4%;
  margin-left: 3%;
}

.events_content_first{
  width: 100%;
  height: 14%;
  display: flex;
  justify-content: space-around;
  border: 1px solid #a0c1f1;
}

.events_content{
  width: 100%;
  height: 14%;
  display: flex;
  justify-content: space-around;
  border: 1px solid #a0c1f1;
  border-top: none;
}
</style>

