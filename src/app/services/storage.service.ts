import {Injectable} from '@angular/core';
import {IProject, Project} from '../shared/model/project';

interface Repository<ID, T> {
  save(id: ID, data: T): void;

  load(id: ID): T;
}

class StudentsRepository implements Repository<string, number> {
  private data = [];

  load(id: string): number {
    return this.data[id];
  }

  save(id: string, data: number): void {

    this.data[id] = data;
  }
}

class AnimalsRepository implements Repository<number, Date> {
  private data = [];

  load(id: number): Date {
    return this.data[id.toString()];
  }

  save(id: number, data: Date): void {
    this.data[id] = data;
  }
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  static readonly LS_KEY = 'TODOs';
  private storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  // Save projects data to the local storage
  save(projects: Array<IProject>): void {
    this.storage.setItem(StorageService.LS_KEY, JSON.stringify(projects));
  }

  // Load projects data from the local storage
  load(): Array<IProject> {
    const json = this.storage.getItem(StorageService.LS_KEY);
    if (json === null) {
      return [];
    }

    return (JSON.parse(json) as Array<IProject>).map((obj: IProject) => {
      return new Project(obj.id, obj.title, obj.description, obj.todoList, obj.datetimeStatusChanged);
    });
  }
}
