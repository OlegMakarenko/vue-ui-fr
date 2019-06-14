<template>
<div class="events_manager">
  <div class="tab2_header">
    <h1>Profile settings</h1>
  </div>
  <div class="field">
    <span class="field-value" v-show="!showField('name')" @click="focusField('name')">{{user.name}}</span>
    <input v-model="user.name" v-show="showField('name')" id="user-name" type="text" class="field-value form-control" @focus="focusField('name')" @blur="blurField">
  </div>
  
</div>
</template>

<script>
export default {
data(){
    return {
      user: {
        name: '',
      },
      editField : ''
    }
  },
  methods : {
    focusField(name){
      this.editField = name;
    },
    blurField(){
      this.editField = '';
    },
    showField(name){
      return (this.user[name] == '' || this.editField == name)
    }
  }
}
</script>

<style>
.events_manager{
  margin-left: 12.4%;
  width: 87.8%;
  height: 100%;
}
.tab2_header{
  height: 10%;
  margin-top: 0;
}
</style>

