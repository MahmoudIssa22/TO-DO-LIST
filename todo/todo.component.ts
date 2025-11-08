import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- ضروري لـ *ngIf و *ngFor
import { FormsModule } from '@angular/forms';   // <-- ضروري لـ [(ngModel)]

@Component({
  selector: 'app-todo',
  standalone: true,             // <-- مهم لجعل المكون مستقل
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  newTask = '';
  message = '';
  tasks: any[] = [
    { name: 'Edit Project Video', completed: true },
    { name: 'Upload Project Video', completed: true },
    { name: 'Record New Video', completed: false },
    { name: 'Thanks for Watching', completed: false }
  ];

  addTask() {
    if (this.newTask.trim() === '') return;
    this.tasks.push({ name: this.newTask, completed: false });
    this.message = 'To do item Created Successfully.';
    this.newTask = '';
    setTimeout(() => this.message = '', 2000);
  }

  toggleTask(i: number) {
    this.tasks[i].completed = !this.tasks[i].completed;
  }

  deleteTask(i: number) {
    this.tasks.splice(i, 1);
  }

  editTask(i: number) {
    const updated = prompt('Edit task:', this.tasks[i].name);
    if (updated !== null && updated.trim() !== '') {
      this.tasks[i].name = updated;
    }
  }
}
