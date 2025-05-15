import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = '';

  constructor(private http: HttpClient) {}

  // getCategories() {
  //   return this.http.get<CategoryModel[]>(`${this.apiUrl}/categories`);
  // }
}
