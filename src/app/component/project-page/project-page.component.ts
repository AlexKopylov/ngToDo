import {Component, OnInit} from '@angular/core';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {

  todo: any;
  currentTodo = null;
  currentIndex = -1;
  title = '';

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.retrieveTodo();
  }

  retrieveTodo(): void {
    this.todoService.getAll().subscribe(
      data => {
        this.todo = data;
        console.log(data);
      }, error => {
        console.log(error);
      });
  }

  refreshList(): void {
    this.retrieveTodo();
    this.currentTodo = null;
    this.currentIndex = -1;
  }

  setActiveTodo(todo, index): void {
    this.currentTodo = todo;
    this.currentIndex = index;
  }

  removeAllTodo(): void {
    this.todoService.deleteAll()
      .subscribe(res => {
        console.log(res);
        this.retrieveTodo();
      }, error => {
        console.log(error);
      });
  }

  searchTitle(): void {
    this.todoService.findByTitle(this.title)
      .subscribe(data => {
        this.todo = data;
        console.log(data);
      }, error => {
        console.log(error);
      });
  }

}
