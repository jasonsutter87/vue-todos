let app = new Vue({
  el: '#app',
  data() {
    return{
      title: "Todo - VueStyle",
      todos: [],
      newTodo: ''
    }
  },
  computed:{},
  methods:{
    onSubmit(listItem) {
      this.newTodo = listItem;
      this.todos.push(this.newTodo)
      newTodo = ''
    },
    removeItem(index) {
      console.log(this)
      this.todos.splice(index, 1)
    }
  }
})
