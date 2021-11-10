import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/Article';

import { Categorie } from '../models/Categorie';
import { SCategorie } from '../models/SCategorie';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private urlAPI = 'http://localhost:3000/api/articles/';

  constructor(private http: HttpClient) {}

  fetchArticles() {
    return this.http.get<Article[]>(this.urlAPI);
  }

  getArticleById(id: string) {
    return this.http.get<Article>(this.urlAPI + id);
  }

  add(data: FormData): Observable<any> {
    console.log(data);
    //temporary code just to test
    // data.categorie = { _id: '61660cdb5f2de7e446e74a1b' } as Categorie; useless cause the backend undrestand the id and turn it into categorie automaticaly
    // data.scategorie = { _id: '61660cdb5f2de7e446e74a1b' } as SCategorie; useless
    return this.http.post<void>(this.urlAPI, data);
  }

  // sendFile(photo: any): Promise<void> {
  //   console.log(photo);
  //   return this.http.post<void>(this.urlAPI + 'upload', photo).toPromise();
  // }

  delete(id: string): Promise<void> {
    return this.http.delete<void>(this.urlAPI + id).toPromise();
  }

  update(data: Article) {
    return this.http.put<void>(this.urlAPI, data).toPromise();
  }
}
