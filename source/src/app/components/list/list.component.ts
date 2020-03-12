import { Component, OnInit } from '@angular/core';
import { Task } from './../../models/task';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tasks: Task[] = [
    {
      description: "Check off first item",
      completed: true,
    },
    {
      description: "Complete second task",
      completed: false,
    },
    {
      description: "Delete third task",
      completed: false,
    }
  ];

}
