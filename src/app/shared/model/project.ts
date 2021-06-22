import {ITodo} from './todo';

export interface IProject {
  id?: number;
  title?: string;
  description?: string;
  todoList?: Array<ITodo>;
  datetimeStatusChanged?: Date;
}

export class Project implements IProject {
  constructor(
    public id?: number,
    public title?: string,
    public description?: string,
    public todoList?: Array<ITodo>,
    public datetimeStatusChanged?: Date
  ) {
  }
}
