<template>
  <div>
    <Card title="菜单管理">
      <Row>
        <Col span="6">
          <Card style="min-height:300px;height: calc(100vh - 274px);">
            <ButtonGroup>
              <Button type="success" @click="handleAdd" size="small">增加</Button>
              <Button type="primary" @click="handleUpdate" size="small">修改</Button>
              <Button type="error" @click="handleDelete" size="small">删除</Button>
            </ButtonGroup>
            <Tree :data="roleTreeDate" @on-select-change="onSelectChange"></Tree>
          </Card>
        </Col>
        <Col span="17" offset="1">
          右侧列表栏
        </Col>
      </Row>
    </Card>
  </div>
</template>

<script>
  import {
    getTreeList,
    queryTreeButtonList,
    deleteButton,
    operateButton,
    deleteTree
  } from "../../../network/api/sys/tree/tree.api"

  export default {
    name: "treeList",
    data() {
      return {
        roleTreeDate: []
      }
    },
    methods: {
      handleAdd() {
        console.log('增加菜单')
      },
      handleUpdate() {
        console.log('修改菜单')
      },
      handleDelete() {
        console.log('删除菜单')
      },
      onSelectChange(data) {
      },
      initTree() {
        const _this = this;
        getTreeList({}).then(res => {
          if (res.code == 200) {
            _this.roleTreeDate = res.obj;
          } else {
            this.$Message.error("加载菜单节点失败，请与管理员联系！")
          }
        });
      }
    },
    mounted() {
      // 初始化完成以后加载菜单数据
      this.initTree();
    }
  }
</script>

<style scoped>

</style>
