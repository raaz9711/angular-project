import { Component, inject } from '@angular/core';
import { TodoService } from '../../todo.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss'
})
export class TodoFormComponent {
newTitle = '';
  private service = inject(TodoService);

  addTodo(input: HTMLInputElement) {
    if (this.newTitle.trim()) {
      this.service.add(this.newTitle);
      this.newTitle = '';
      input.value = '';
    }
}
}
