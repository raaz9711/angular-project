import { Component, inject, input } from '@angular/core';
import { TodoService } from '../../todo.service';
import { Todo } from '../../todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})
export class TodoItemComponent {
todo = input.required<Todo>();
  service = inject(TodoService);
}
