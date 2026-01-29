import { updateTodoInStorage, deleteTodoFromStorage, getTodos } from './storage.js';

export const updateCounter = () => {
    const todos = getTodos();
    const pending = todos.filter(t => !t.completed).length;
    const counter = document.querySelector('#todo-counter');
    counter.textContent = pending === 0 && todos.length > 0 ? "¡Listo! ✨" : `Pendientes: ${pending}`;
    if (pending === 0 && todos.length > 0) triggerConfetti();
};

export const triggerConfetti = () => {
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.background = `oklch(0.8 0.15 ${Math.random() > 0.5 ? 181 : 350})`;
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 3000);
    }
};

export const renderTodo = (todoObj, container) => {
    const li = document.createElement('li');
    li.className = `cat-${todoObj.category} ${todoObj.completed ? 'completed' : ''}`;
    li.dataset.id = todoObj.id;
    
    li.innerHTML = `
        <div class="task-content">
            <small>${todoObj.category}</small>
            <span>${todoObj.text}</span>
        </div>
        <button class="delete-btn">✕</button>
    `;

    li.querySelector('.task-content').onclick = () => {
        li.classList.toggle('completed');
        updateTodoInStorage(todoObj.id);
        updateCounter();
    };

    li.querySelector('.delete-btn').onclick = () => {
        li.style.transform = "translateX(20px)";
        li.style.opacity = "0";
        setTimeout(() => {
            li.remove();
            deleteTodoFromStorage(todoObj.id);
            updateCounter();
        }, 300);
    };

    container.appendChild(li);
};