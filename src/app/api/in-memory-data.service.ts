import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService {

  createDb() {
    const todos = [
      {id: 1, title: 'test title', description: 'test', published: true},
      {id: 2, title: 'test 2 title', description: 'test 2', published: false},
    ];

    return {todos};
  }

  constructor() {
  }
}
