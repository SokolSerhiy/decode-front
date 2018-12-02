import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Decode } from './decode';

@Injectable()
export class DecodeService {
  url = 'https://zlata-backend.herokuapp.com/decode';
  constructor(private http: HttpClient) { }
  code(word: String, maxRes: number): Observable<Decode> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      }),
      params: new HttpParams().append('max_res', maxRes.toString())
    };
    return this.http.post<Decode>(this.url, JSON.stringify({word: word}), httpOptions);
  }
}
