import {Component, OnInit} from '@angular/core';
import {TodoService} from '../../services/todo.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {

  currentTodo = null;
  message = '';

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.message = '';
    this.getTodo(this.route.snapshot.paramMap.get('id'));
  }

  getTodo(id): void {
    this.todoService.get(id)
      .subscribe(
        data => {
          this.currentTodo = data;
          console.log(data);
        }, error => console.log(error)
      );
  }

  updatePublished(status): void {
    const data = {
      title: this.currentTodo.title,
      declarations: this.currentTodo.description,
      published: status
    };

    this.todoService.update(this.currentTodo.id, data)
      .subscribe(
        response => {
          this.currentTodo.published = status;
          console.log(response);
        }, error => console.log(error)
      );
  }

  updateTodos(): void {
    this.todoService.update(this.currentTodo.id, this.currentTodo)
      .subscribe(
        resp => {
          console.log(resp);
          this.message = 'The todo was updated successfully';
        }, error => console.log(error)
      );
  }

  deleteTodo(): void {
    this.todoService.delete(this.currentTodo.id)
      .subscribe(
        resp => {
          console.log(resp);
          this.router.navigate(['/projects']);
        }, error => console.log(error)
      );
  }


}
