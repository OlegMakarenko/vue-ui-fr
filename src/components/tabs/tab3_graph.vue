<template>
  <div class="graph_manager">
  <h1>
    Graph component
  </h1>

    <div class="">
      <div class="flex">
        <input class="" placeholder="New tag" @keydown.enter.prevent="addTag" v-model="newTag">
        <button type="button" class="btn" @click="addTag">Add</button>
      </div>

      <ul v-show="value && value.length > 1" class="">
        <li v-for="tag in value" :key="tag" class="">
          <span class="">{{tag}}</span>
          <button class="" @click="removeTag(tag)">Remove</button>
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
  export default {
    props:['value'],
    
    data() {
      return {
      newTag: 'null',  
      tags:['testing', 'testing2'],
      include: null,
      };
    },

    components:{
      
    },

    methods:{
      addTag(){
        if(this.newTag.trim().length === 0 || this.newTag.trim()){
          return
        }
          this.$emit('input', [...this.value, this.newTag.trim()])
          this.newTag = ''
      },

      removeTag(){
        this.$emit('input', this.value.filter(t => t !== tag))
      },
    },
  };
</script>

<style>
.graph_manager{
  margin-left: 12.4%;
  width: 87.8%;
  height: 100%;
}
</style>

