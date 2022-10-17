import { Injectable } from '@angular/core';
import {HttpClient , HttpHandler} from '@angular/common/http'
import { Observable, of } from 'rxjs';
import {Task} from '../componentes/Task'
import {TASKS} from '../componentes/mock-tasks'


@Injectable({
  providedIn: 'root'
})
export class TaskService {
private apiUrl = 'https://localhost:5000/tasks'

  constructor(
    private http:HttpClient
  ) { }
  getTasks(): Observable<Task[]> {

    /*   const tasks = of (TASKS) ; 
      return tasks */
   /* Lo que tiene que ir (No me devuelve las tareas) --> */ return this.http.get<Task[]>(this.apiUrl) 
  }
}
