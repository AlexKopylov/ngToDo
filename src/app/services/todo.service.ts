import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

// const baseUrl = 'http://localhost:4200/api/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private baseUrl = 'api/todos';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get<any[]>(this.baseUrl);
  }

  get(id): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  create(data): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }

  findByTitle(title): Observable<any> {
    return this.http.get(`${this.baseUrl}?title=${title}`);
  }
}
