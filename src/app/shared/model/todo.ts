export interface ITodo {
  id: number;
  title: string;
  description?: string;
  status?: boolean;
  dataTime?: Date;
}

export class Todo implements ITodo {
  description?: string;
  status?: boolean;
  dataTime?: Date;

  constructor(public id: number, public title: string) {
    this.status = false;
    this.dataTime = new Date();
  }
}
