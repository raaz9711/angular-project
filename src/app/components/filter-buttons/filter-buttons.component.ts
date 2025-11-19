import { Component, inject } from '@angular/core';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-filter-buttons',
  standalone: true,
  imports: [],
  templateUrl: './filter-buttons.component.html',
  styleUrl: './filter-buttons.component.scss'
})
export class FilterButtonsComponent {
service = inject(TodoService);
  currentFilter = this.service.filterSignal;

  filters = [
    { label: 'All', value: 'all' as const },
    { label: 'Active', value: 'active' as const },
    { label: 'Completed', value: 'completed' as const }
  ];
}
