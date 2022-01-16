<template>
  <Modal v-model="show" title="新增字典" @on-ok="ok" :loading="loading" :mask-closable="false">
   这是一个新增字典的页面
  </Modal>
</template>

<script>
  export default {
    name: "addDict",
    props: {
      value: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        show: this.value,
        loading: true
      }
    },
    methods: {
      ok() {
        console.log('点击了确定按钮')
      },
      closeModal(val) {
        this.$emit('input', val);
      }
    },
    watch: {
      value(val) {
        this.show = val;
      },
      show(val) {
        if (val) {
          console.log('当打开新增的页面的时候的一些操作')
        } else {// 反之则关闭页面
          this.closeModal(val);
        }
      }
    }
  }
</script>

<style scoped>

</style>
