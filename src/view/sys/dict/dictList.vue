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
        这是我们的表格区域
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
        search: ''
      }
    },
    methods: {
      addDict() {
        console.log('增加字典')
      },
      handleSearch(){
        console.log('这是一个查询')
      }
    }
  }
</script>

<style scoped>

</style>
