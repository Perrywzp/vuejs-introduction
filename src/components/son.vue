<!----------------
 --@description
 --@author wangzhipei
 --@date 2016/12/22/0022.
------------------>
<template>
  <div>
    <label>儿子对父亲说：</label>
    <input v-model="toFatherMsg" @keyup.enter="toFather">
    <p>
      <span>来自父亲的话：</span>
      {{fromFatherMsg}}
    </p>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        toFatherMsg: ''
      }
    },
    props: ['fromFatherMsg'],
    methods: {
      toFather () {
        this.$emit('fromSon', this.toFatherMsg)
        this.toFatherMsg = ''
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>

