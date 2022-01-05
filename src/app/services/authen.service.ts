import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  constructor(private http:HttpClient) { }
  login():Observable<any>
  {
    return this.http.get<any>(`${environment.loginUrl}login`)
  }
}
