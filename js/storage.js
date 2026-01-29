export const getTodos = () => JSON.parse(localStorage.getItem('myTodos')) || [];

export const saveTodo = (todoObj) => {
    const todos = getTodos();
    todos.push(todoObj);
    localStorage.setItem('myTodos', JSON.stringify(todos));
};

export const updateTodoInStorage = (id) => {
    const todos = getTodos();
    const index = todos.findIndex(t => t.id === id);
    if (index !== -1) {
        todos[index].completed = !todos[index].completed;
        localStorage.setItem('myTodos', JSON.stringify(todos));
    }
};

export const deleteTodoFromStorage = (id) => {
    const todos = getTodos().filter(t => t.id !== id);
    localStorage.setItem('myTodos', JSON.stringify(todos));
};