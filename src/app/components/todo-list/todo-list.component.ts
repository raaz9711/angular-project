import { Component, inject } from '@angular/core';
import { TodoService } from '../../todo.service';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [NgFor, TodoItemComponent, DragDropModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
service = inject(TodoService);
  todos = this.service.todoFiltered;

  drop(event: CdkDragDrop<any>) {
    const currentTodos = [...this.service.todos()];
    moveItemInArray(currentTodos, event.previousIndex, event.currentIndex);
    this.service.todos.set(currentTodos); // trigger save via effect
}
}