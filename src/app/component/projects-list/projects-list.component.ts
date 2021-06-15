import {Component, OnInit} from '@angular/core';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent implements OnInit {

  todos: any;
  currentTodo = null;
  currentIndex = -1;
  title = '';

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.retrieveTodos();
  }

  retrieveTodos(): void {
    this.todoService.getAll()
      .subscribe(
        data => {
          this.todos = data;
          console.log(data);
        },
        error => console.log(error)
      );
  }

  refreshList(): void {
    this.retrieveTodos();
    this.currentTodo = null;
    this.currentIndex = -1;
  }

  setActiveTodo(todo, index): void {
    this.currentTodo = todo;
    this.currentIndex = index;
  }

  removeAllTodos(): void {
    this.todoService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveTodos();
        }, error => console.log(error)
      );
  }

  searchTitle(): void {
    this.todoService.findByTitle(this.title)
      .subscribe(
        data => {
          this.todos = data;
          console.log(data);
        }, error => console.log(error)
      );
  }
}
