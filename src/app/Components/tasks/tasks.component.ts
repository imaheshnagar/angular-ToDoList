import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/Services/task.service';
import { Task } from 'src/app/Task';
import { TASKS } from 'src/app/mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {


   tasks: Task[] =[];
   constructor(private taskser:TaskService) {
 
    
  }

  ngOnInit(): void {
    this.getTasks();
  }

  deleteTask(task:Task)
  {
    if(task !=null && task.id !=null)
    {
      this.taskser.DeleleTask(task.id).subscribe(
        ()=> {
          this.getTasks();
        }
      );
    }
    
  }

  AddTask(task: Task) {
    console.log(task);
    if(task !=null)
    {
      this.taskser.AddTask(task).subscribe(
        ()=> {
          this.getTasks();
        }
      );
    }
    }

  toggleReminder(task:Task) {
    if(task !=null && task.id !=null)
    {
      task.reminder = !task.reminder;
      this.taskser.toggerReminder(task).subscribe(
        ()=> {
          this.getTasks();
        }
      );
    }
    }

  getTasks()
  {
    this.taskser.getTasks().subscribe(
      (dbtasks: Task[])=>
      {
        this.tasks  = dbtasks ; 
      } 
     );
  }

  

}
