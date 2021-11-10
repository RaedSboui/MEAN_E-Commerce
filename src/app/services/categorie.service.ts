import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorie } from '../models/Categorie';

@Injectable({
  providedIn: 'root',
})
export class CategorieService {
  private urlAPI = 'http://localhost:3000/api/categories/';

  constructor(private http: HttpClient) {}

  delete(id: any) {
    return this.http.delete<void>(this.urlAPI + id).toPromise();
  }
  fetchCategories() {
    return this.http.get<Categorie[]>(this.urlAPI);
  }
  getArticleById(id: string) {
    return this.http.get<Categorie>(this.urlAPI + id);
  }

  add(data: any): Promise<void> {
    return this.http.post<void>(this.urlAPI, data).toPromise();
  }

  update(data: Categorie) {
    return this.http.put<void>(this.urlAPI, data).toPromise();
  }
}
