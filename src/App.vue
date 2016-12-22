<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <label> {{text}}：<input v-model="bookName" @keyup.enter="enterBook"/></label>
      <ul>
        <li v-for="book in booksList" :class="{hot:book.isHot}" @click="like(book)">{{ book.name }}</li>
      </ul>
    </div>

    <center class="center">
      <label>演示父子相互传播信息</label>
      <div>
        <p>
        <label>父亲对儿子说：</label>
        <input v-model="toSonMsg">
        </p>
        <p>
          <label>来自儿子的话：</label>
          {{fromSonMsg}}
        </p>
      </div>
      <son :fromFatherMsg="toSonMsg" v-on:fromSon="typeFromSon"></son>
    </center>
  </div>
</template>

<script type="text/ecmascript-6">
  import Store from './store'
  import Son from 'components/son'
  export default {
    name: 'app',
    data () {
      return {
        text: '输入你喜欢的书籍',
        booksList: Store.fetch(),
        bookName: '',
        toSonMsg: '',
        fromSonMsg: ''
      }
    },

    components: {
      Son
    },

    watch: {
      booksList: {
        handler () {
          Store.save(this.booksList)
        },
        deep: true
      }
    },

    methods: {
      enterBook () {
        this.booksList.push({name: this.bookName, isHot: false})
        this.bookName = ''
      },
      like (book) {
        book.isHot = !book.isHot
      },
      typeFromSon (msg) {
        this.fromSonMsg = msg
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    font-family 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing antialiased;
    -moz-osx-font-smoothing grayscale;
    text-align center;
    color #2c3e50;
    margin-top 60px;
  h1, h2
    font-weight normal;
  ul
    width 200px;
    margin 20px auto;
    list-style-type decimal;
    padding: 0;
    li
      margin-bottom 5px;
      cursor pointer;
      &.hot
        color orange;
    li:hover
      color green;
  a
    color: #42b983;
  .center
    width 400px;
    margin 20px auto;
    label
      text-align right;

</style>
