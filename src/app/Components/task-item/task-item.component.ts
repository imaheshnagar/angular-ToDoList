import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import {faTimes} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {
  @Input() task! :Task ;
  fatimes = faTimes;

  @Output() onDeleteTask:EventEmitter<Task> = new EventEmitter<Task>();
  @Output() onToggleReminder:EventEmitter<Task> = new EventEmitter<Task>();
  
  onDelete(task:Task)
  {
    this.onDeleteTask.emit(task);
  }

  onToggle(task:Task)
  {
    console.log(task);
    this.onToggleReminder.emit(task);
  }

}
