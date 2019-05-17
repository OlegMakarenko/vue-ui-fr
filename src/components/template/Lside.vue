<template>
  <div>
    <div class="left">
      <div>
        <button class="btn2">Моя система</button>


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
            <p class="allp">Здесь Вы можете группировать свои устройства и управлять ими.</p>
      </div>

      <div>
        <button class="btn2">Диспетчер устройств</button>
      </div>
    </div>
  </div>
</template>

<script>
  let id = 1000;

export default {
  data() {
    const data = [{
      id: 1,
      label: 'Level one 1',

      children: [{
        id: 4,
        label: 'Level two 1-1',
        children: [{
          id: 9,
          label: 'Level three 1-1-1'
        }, {
          id: 10,
          label: 'Level three 1-1-2'
        }]
      }]

      }, {
      id: 2,
      label: 'Level one 2',
      children: [{
        id: 5,
        label: 'Level two 2-1'
      }, {
        id: 6,
        label: 'Level two 2-2'
      }]

      }, {
        id: 3,
        label: 'Level one 3',
      children: [{
        id: 7,
        label: 'Level two 3-1'
      }, {
        id: 8,
        label: 'Level two 3-2'
      }]
    }];

     return {
       data: JSON.parse(JSON.stringify(data))
      //  data: JSON.parse(JSON.stringify(data))
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

<style>

.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
  width: -1px;
}

.left {
  width: 20%;
  min-height: 100vh;
  float: left;
  background-color: #ccdbee;
  /* margin-top: 7px; */
  display: block;
  text-align: center;
  border-width: 4px;
  border-color: black;
}

.btn2 {
  width: 99%;
  height: 12.5vh;
  color: #dfe0e0;
  margin: 2px;
  border: 1px solid #dddddc;
  border-radius: 2px;
  background-color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 24px;
  cursor: pointer;


}
</style>
