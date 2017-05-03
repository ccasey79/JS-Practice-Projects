

var todoList = {
  todos: ["item 1", "item 2", "item 3", "item 4"],
  displayTodos: function() {
    console.log('My Todos: ',this.todos);
  },
  addTodo: function(newTodo) {
    this.todos.push(newTodo);
    this.displayTodos();
  },
  changeTodo: function(position, nameChange) {
    this.todos[position] = nameChange;
    this.displayTodos();
  }
};


todoList.changeTodo(3, 'new item')
