import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [
    {
      task: 'Fold Laundry',
      completed: false,
    },
    {
      task: 'Mow Grass',
      completed: true,
    },
    {
      task: 'Get Groceries',
      completed: true,
    },
    {
      task: 'Walk Dogs',
      completed: false,
    },
    {
      task: 'Return item to UPS',
      completed: false,
    },
    {
      task: 'Refill Rx',
      completed: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
