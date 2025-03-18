import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface CategoryData {
  name: string;
  img: string;
}

interface productData {
  name: string;
  avatar: string;
  categoryId: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _http: HttpClient) { }

  getCategories(): Observable<any> {
    return this._http.get<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/categories");
  }

  getProducts(): Observable<any> {
    return this._http.get<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/products");
  }

  //getProductsByCategoryId(categoryId:string): Observable<any> {
  //  return this._http.get<any>(`https://67cd64b6dd7651e464ee3d63.mockapi.io/products?categoryId=${categoryId}`);
  //}

  setCategory(category: CategoryData): Observable<any> {
    return this._http.post("https://67cd64b6dd7651e464ee3d63.mockapi.io/categories", category);
  }

  setProduct(product: productData): Observable<any> {
    return this._http.post("https://67cd64b6dd7651e464ee3d63.mockapi.io/products", product);
  }
}
