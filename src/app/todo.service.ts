import { computed, effect, Injectable, signal } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
   todos = signal<Todo[]>(this.loadFromStorage());
   filter = signal<'all' | 'active' | 'completed'>('all');
  constructor() { 
    effect(() => {
      localStorage.setItem('to-do-list', JSON.stringify(this.todos()));
    });
  }

  todoFiltered = computed(() => {
    const todos =  this.todos();
    const filter = this.filter();

    if(filter == 'active') return todos.filter(e => !e.completed);
    if(filter == 'completed') return todos.filter(e => e.completed);
    return todos;
  })

  todosSignal = this.todos.asReadonly();
  filterSignal = this.filter.asReadonly();

  add(title : string){
    const newTodo: Todo = {
      id: Date.now(),
      title: title.trim(),
      completed: false
    };
    this.todos.update(todos => [...todos,newTodo]);
  }

  toggle(id : number) {
    this.todos.update(todos => todos.map(e => e.id === id ? {...e, completed :!e.completed} : e ));
  }

  delete(id : number) {
    this.todos.update(todos => todos.filter(e => e.id !== id))
  }

  setFilter(filter: 'all' | 'active' | 'completed' ){
    this.filter.set(filter);
  }

  loadFromStorage() : Todo[] {
    const data = localStorage.getItem('to-do-list');
    return data ? JSON.parse(data) : [];
  }
}
