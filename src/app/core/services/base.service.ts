import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  apiUrl = environment.apiUrl
  constructor(
    private http: HttpClient
  ) { }

  get<T>(url: string): Observable<T>{
    return this.http.get<T>(this.apiUrl + url)
  }

  delete<T>(url: string): Observable<T>{
    return this.http.delete<T>(this.apiUrl + url)
  }
}
