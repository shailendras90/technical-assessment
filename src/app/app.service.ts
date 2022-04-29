import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient ) { }

  getBooks(): Observable<any> {
    return this.httpClient.get<any>('https://raw.githubusercontent.com/PerxTech/angular-interview/master/example.json');
  }
}
