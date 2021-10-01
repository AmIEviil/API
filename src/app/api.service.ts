import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry,catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class APIService {
  httpOptions = {
    heards: new HttpHeaders({
      'Content-Type':'application/json',
      'Acces-Control-Allow-Origin':'**'
    })
  }
  constructor(private http: HttpClient) { }

  getPost(): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
    .pipe (retry(3));
  }
}
