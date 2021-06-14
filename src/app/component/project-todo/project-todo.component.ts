import {Component, OnInit} from '@angular/core';
import {TodoService} from '../../services/todo.service';

@Component({
  selector: 'app-project-todo',
  templateUrl: './project-todo.component.html',
  styleUrls: ['./project-todo.component.scss']
})
export class ProjectTodoComponent implements OnInit {

  todo = {
    title: '',
    description: '',
    published: false
  };

  submitted = false;

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
  }

  saveTodo(): void {
    const data = {
      title: this.todo.title,
      description: this.todo.description
    };

    this.todoService.create(data)
      .subscribe(res => {
        console.log(res);
        this.submitted = true;
      }, error => {
        console.log(error);
      });
  }

  newTodo(): void {
    this.submitted = false;
    this.todo = {
      title: '',
      description: '',
      published: false
    };
  }

}
