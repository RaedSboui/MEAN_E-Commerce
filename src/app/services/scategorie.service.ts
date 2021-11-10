import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SCategorie } from '../models/SCategorie';

@Injectable({
  providedIn: 'root',
})
export class ScategorieService {
  private urlAPI = 'http://localhost:3000/api/scategories/';

  constructor(private http: HttpClient) {}

  fetchSCategories() {
    return this.http.get<SCategorie[]>(this.urlAPI);
  }
  delete(id: any) {
    return this.http.delete<void>(this.urlAPI + id).toPromise();
  }

  fetchSCategoriesByCat(categorieId: string | undefined) {
    console.log(categorieId);

    const options = categorieId
      ? { params: new HttpParams().set('cat', categorieId) }
      : {};
    return this.http.get<SCategorie[]>(this.urlAPI + 'cat', options);
  }
}
