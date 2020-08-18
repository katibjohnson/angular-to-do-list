import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { NgForm } from '@angular/forms';

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

  searchTerm: string;

  showIndex: number;

  constructor() {}

  setShowIndex(index: number) {
    this.showIndex = index;
  }

  resetShowIndex() {
    this.showIndex = undefined;
  }

  addTask(form: NgForm) {
    let newTask: Todo = {
      task: form.value.add,
      completed: false,
    };
    this.todos.push(newTask);
  }

  removeTask(index: number) {
    this.todos.splice(index, 1);
  }

  completeTask(index: number) {
    this.todos[index].completed = true;
  }

  setSearchTerm(form: NgForm) {
    this.searchTerm = form.value.searchTerm.toLowerCase().trim();
  }

  myFilterMethod() {
    if (!this.searchTerm) {
      return this.todos;
    } else {
      return this.todos.filter((item) => {
        let currentTask = item.task.toLowerCase().trim();
        return currentTask.includes(this.searchTerm);
      });
    }
  }

  ngOnInit(): void {}
}
