import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBlog, IRequestBlog } from '../interfaces/iblog';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private http: HttpClient) { }
  private URL: string = environment.BACK_URL;
  public api = { blogs: this.URL + 'blogs'}

  getAll(): Observable<IBlog[]>{
    return this.http.get<IBlog[]>(this.api.blogs);
  }
  create(item: IRequestBlog): Observable<IBlog>{
    return this.http.post<IBlog>(this.api.blogs, item)
  }
  delete(id: number): Observable<void>{
    return this.http.delete<void>(`${this.api.blogs}/${id}`)
  }
  update(id: number, item: IRequestBlog): Observable<IBlog>{
    return this.http.patch<IBlog>(`${this.api.blogs}/${id}`, item);
  }
}
