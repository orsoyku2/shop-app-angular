import { Injectable } from '@angular/core';
import { Category } from '../category/category';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import{tap} from 'rxjs/operators';

@Injectable()
export class CategoryService {

  constructor(private http:HttpClient) { }
  path: string = " http://localhost:3000/categories"

  getCategories():Observable<Category[]> {
    return this.http.get<Category[]>(this.path).pipe(tap(data => {
      console.log(JSON.stringify(data))
    }))

  }
}
