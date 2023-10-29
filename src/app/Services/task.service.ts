import { Injectable } from '@angular/core';
import { TASKS } from '../mock-tasks';
import { Task } from '../Task';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class TaskService {
 
  constructor(private http:HttpClient) { }



  getTasks():Observable<Task[]>
  {
    return this.http.get<Task[]>(environment.apiUrl+'TASKS');
  }

  toggerReminder(task:Task)
  {
    let url = `${environment.apiUrl}TASKS/${task.id}`;
    return this.http.put(url,task);
  }

  DeleleTask(id:number) {
    let url = `${environment.apiUrl}TASKS/${id}`;
    return this.http.delete(url);
  }

  AddTask(task:Task) {
    let url = `${environment.apiUrl}TASKS/`;
    return this.http.post(url,task);
  }


}
