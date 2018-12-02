import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Decode } from './decode';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class DecodeService {
  // url = 'https://zlata-backend.herokuapp.com/decode';
  url = 'http://localhost:8080/decode';
  constructor(private http: HttpClient) { }
  code(word: String, maxRes: number): Observable<Decode> {
    return this.http.post<Decode>(this.url, JSON.stringify({word: word}), httpOptions);
  }
}
