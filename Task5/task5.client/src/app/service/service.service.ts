import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface CategoryData {
  name: string;
  img: string;
}

interface ProductData {
  name: string;
  avatar: string;
  categoryId: string;
}


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private _http: HttpClient) { }

  getCategories(): Observable<CategoryData[]> {
    return this._http.get<CategoryData[]>("https://67cd64b6dd7651e464ee3d63.mockapi.io/categories");
  }

  getProducts(): Observable<ProductData[]> {
    return this._http.get<ProductData[]>("https://67cd64b6dd7651e464ee3d63.mockapi.io/products");
  }

  getProductsByCategoryId(categoryId: string): Observable<ProductData[]> {
    return this._http.get<ProductData[]>(`https://67cd64b6dd7651e464ee3d63.mockapi.io/products?categoryId=${categoryId}`);
  }

  setCategory(category: CategoryData): Observable<CategoryData> {
    return this._http.post<CategoryData>("https://67cd64b6dd7651e464ee3d63.mockapi.io/categories", category);
  }

  setProduct(product: ProductData): Observable<ProductData> {
    return this._http.post<ProductData>("https://67cd64b6dd7651e464ee3d63.mockapi.io/products", product);
  }


  getCategoryByCategoryId(id: string): Observable<CategoryData> {
    return this._http.get<CategoryData>(`https://67cd64b6dd7651e464ee3d63.mockapi.io/categories/${id}`);
  }

  editCategory(category: CategoryData, id: string): Observable<CategoryData> {
    return this._http.put<CategoryData>(`https://67cd64b6dd7651e464ee3d63.mockapi.io/categories/${id}`, category);
  }

  getProductByProductId(id: string): Observable<ProductData> {
    return this._http.get<ProductData>(`https://67cd64b6dd7651e464ee3d63.mockapi.io/products/${id}`);
  }

  editProduct(product: ProductData, id: string): Observable<ProductData> {
    return this._http.put<ProductData>(`https://67cd64b6dd7651e464ee3d63.mockapi.io/products/${id}`, product);
  }


  addNewUser(newUser: any): Observable<any>{
    return this._http.post<any>("https://67cea6ee125cd5af757b6514.mockapi.io/Users", newUser);
  }

  getAllUsers(): Observable<any[]> {
    return this._http.get<any[]>("https://67cea6ee125cd5af757b6514.mockapi.io/Users");
  }

  checkUserExists(email: string, password: string): Observable<any> {
    return this._http.get<any>(`https://67cea6ee125cd5af757b6514.mockapi.io/Users?Email=${email}&password=${password}`);
  }


  private isLoggedInSubject = new BehaviorSubject<boolean>(!!localStorage.getItem('User'));
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  login(user: any) {
    localStorage.setItem('User', JSON.stringify(user));
    this.isLoggedInSubject.next(true); 
  }

  updateUserProfile(any: any): Observable<any> {
    return this._http.put<any>(`https://67cea6ee125cd5af757b6514.mockapi.io/Users/${any.id}`, any);
  }


  logout() {
    localStorage.removeItem('User');
    this.isLoggedInSubject.next(false); 
  }


}
