import { getTodos, saveTodo } from './storage.js';
import { renderTodo, updateCounter } from './ui.js';

const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const category = document.querySelector('#todo-category');
const todoList = document.querySelector('#todo-list');

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    getTodos().forEach(todo => renderTodo(todo, todoList));
    updateCounter();
});

// Manejo de Formulario
form.onsubmit = (e) => {
    e.preventDefault();
    const newTodo = {
        id: Date.now(),
        text: input.value,
        category: category.value,
        completed: false
    };
    renderTodo(newTodo, todoList);
    saveTodo(newTodo);
    updateCounter();
    input.value = '';
};

// Filtros
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.onclick = () => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        
        document.querySelectorAll('#todo-list li').forEach(li => {
            const isCompleted = li.classList.contains('completed');
            const hasCat = li.classList.contains(`cat-${filter}`);
            
            if (filter === 'all') li.style.display = 'flex';
            else if (filter === 'pending') li.style.display = !isCompleted ? 'flex' : 'none';
            else li.style.display = hasCat ? 'flex' : 'none';
        });
    };
});