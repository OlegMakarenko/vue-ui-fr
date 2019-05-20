<template>
  <transition name="slide-fade">
    <div>
      <div class="custom-tree-container" v-if="showTree">
        <div class="custom-tree-container">
          <div class="block">
            <el-tree
              :data="data"
              show-checkbox
              node-key="id"
              default-expand-all
              :expand-on-click-node="false">
                <span class="custom-tree-node" slot-scope="{ node, data }">
                  <span>{{ node.label }}</span>
                    <span>
                      <el-button
                        type="text"
                        size="mini"
                        @click="() => append(data)">
                        Append
                      </el-button>

                      <el-button
                        type="text"
                        size="mini"
                        @click="() => remove(node, data)">
                        Delete
                      </el-button>
                    </span>
                </span>
            </el-tree>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
let id = 1000;

export default {
    name:'',

    data() {
    const data = [{
      id: 1,
      label: 'Мой дом',

      children: [{
        id: 4,
        label: 'Спальня',
        children: [{
            id: 9,
            label: 'Кухня'
        }, {
            id: 10,
            label: 'Ванная'
        }]
        }]
        }, {

        id: 2,
        label: 'Дача',
        children: [{
            id: 5,
            label: 'Пристройка'
        }, {
            id: 6,
            label: 'Гараж'
        }]
        }, {

        id: 3,
        label: 'Дом родителей',
            children: [{
                id: 7,
                label: 'Кухня'
            }, {
                id: 8,
                label: 'Сад'
            }]
    }];

     return {
        showTree: true,
        data: JSON.parse(JSON.stringify(data))
     }
   },

  methods: {
    append(data) {
      const newChild = { id: id++, label: 'testtest', children: [] };

      if (!data.children) {
        this.$set(data, 'children', []);
      }
      data.children.push(newChild);
    },

    remove(node, data) {
      const parent = node.parent;
      const children = parent.data.children || parent.data;
      const index = children.findIndex(d => d.id === data.id);
      children.splice(index, 1);
    }
  }
}
</script>


<style scoped>

.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
  width: -1px;
}

.slide-fade-enter-active, .slide-fade-leave-active {
    transition: opacity .5s;
}

.slide-fade-enter, .slide-fade-leave-to { /* .fade-leave-active до версии 2.1.8 */ 
    opacity: 0;
}
</style>
