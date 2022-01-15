<template>
  <div>
    <Card title="字典管理">
      <div>
        <div style="display:inline-block;float:left;">
          <Button type="success" @click="addDict">+新增字典</Button>
        </div>
        <div style="display:inline-block;float:right;">
          <Input v-model="search" suffix="ios-search" placeholder="请输入查询信息" style="width: auto"
                 :search=true @on-search="handleSearch"/>
        </div>
      </div>
      <div style="clear: both;"></div>
      <div style="margin-top: 10px;">
        <Table ref="dictTable" @on-sort-change="onSortChange"  :columns="columns" :data="dictData" :height="tableHeight">
          <template slot-scope="{ row, index }" slot="dictCode">
            <Input type="text" v-model="editDictCode" v-if="editIndex === index"/>
            <span v-else>{{ row.dictCode }}</span>
          </template>

          <template slot-scope="{ row, index }" slot="dictText">
            <Input type="text" v-model="editDictText" v-if="editIndex === index"/>
            <span v-else>{{ row.dictText }}</span>
          </template>

          <template slot-scope="{ row, index }" slot="dictValue">
            <Input type="text" v-model="editDictValue" v-if="editIndex === index"/>
            <span v-else>{{ row.dictValue}}</span>
          </template>

          <template slot-scope="{ row, index }" slot="action">
            <div v-if="editIndex === index">
              <Button type="success" @click="handleUpdate(index)">确定</Button>
              <Button type="error" @click="editIndex = -1">取消</Button>
            </div>
            <div v-else>
              <Button type="primary" @click="handleEdit(row, index)" size="small">编辑</Button>
              <Button type="error" @click="handleDelete(row, index)" size="small">删除</Button>
            </div>
          </template>
        </Table>
      </div>
      <div style="margin-top: 10px;">
        这是我们的分页组件
      </div>
    </Card>
  </div>
</template>

<script>
  export default {
    name: "dictList",
    data() {
      return {
        search: '',
        dictData: [],
        columns: [/*列*/
          {
            title: '字典类型',
            key: 'dictType',
            sortable: true
          },
          {
            title: '字典编码',
            slot: 'dictCode',
            key: 'dictCode',
            sortable: true
          },
          {
            title: '字典文本',
            slot: 'dictText',
            key: 'dictText',
            sortable: true
          },
          {
            title: '字典数值',
            slot: 'dictValue',
            key: 'dictValue',
            sortable: true
          },
          {
            title: '操作',
            slot: 'action'
          }
        ],
        key:'dictType',
        order:'desc',
        editIndex: -1,  // 当前聚焦的输入框的行数
        editId: '',
        editDictCode: '',
        editDictText: '',
        editDictValue: '',
        tableHeight:200
      }
    },
    methods: {
      addDict() {
        console.log('增加字典')
      },
      handleSearch(){
        console.log('这是一个查询')
      },
      handleUpdate(index){
        console.log('点击了确定')
      },
      handleEdit(row, index){
        console.log('点击了编辑')
      },
      handleDelete(row, index){
        console.log('点击了删除')
      },
      onSortChange(sort){
        console.log(sort.key+'-'+sort.order)
        if(sort.order=='normal'){
          this.order = '';
        }else{
          this.key = sort.key;
          this.order = sort.order;
        }
        this.handleSearch();
      }
    },
    mounted() {
      // 初始化完成组件的时候执行以下的逻辑
      this.handleSearch();
      this.tableHeight = window.innerHeight - this.$refs.dictTable.$el.offsetTop - 270
    }
  }
</script>

<style scoped>

</style>
