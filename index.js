Vue.component('todo-form', {
  props: [],
  template: `
  <div class="mx-auto text-center">
    <input type="text" name="newTodo" v-model="newTodo" placeholder="Write Your Todo." class="w-75 form-size">
    <button type="submit" name="submit" value="submit" v-on:click='onSubmit(newTodo)' class="form-size">Submit</button>
  </div>
  `,
  data() {
    return {
        newTodo: ''
    }
  },
  methods: {
    onSubmit(listItem) {
      this.$emit('add-to-todos', listItem)
    }
  }
})

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
      this.todos.splice(index, 1)
    }
  }
})
