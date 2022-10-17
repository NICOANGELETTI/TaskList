import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string = ' My Task List';
  
  constructor() { }

  ngOnInit(): void {
  }
toggleAddTask() {
  console.log("toggleAddTask!")
}
}
