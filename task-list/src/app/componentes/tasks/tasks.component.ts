import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import {TaskService} from 'src/app/service/task.service'
import {Task} from '../Task'
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
task: Task[] = [];

  constructor (private TaskService: TaskService) { }

  ngOnInit(): void { 
    /* Like Promise */
    this.TaskService.getTasks().subscribe((tasks) =>(
      this.task = tasks
      

    )) ;
  }

}
