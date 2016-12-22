/**
 * @description
 * @author wangzhipei
 * @date 2016/12/22/0022.
 */

const bookListKey = 'books'
export default {
  fetch () {
    return JSON.parse(window.localStorage.getItem(bookListKey) || '[]')
  },

  save (data) {
    window.localStorage.setItem(bookListKey, JSON.stringify(data))
  }
}
