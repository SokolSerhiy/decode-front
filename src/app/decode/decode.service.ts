import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
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
  url = 'https://zlata-backend.herokuapp.com/decode';
  constructor(private http: HttpClient) { }
  code(word: String, maxRes: number): Observable<Decode> {
    const params = new HttpParams();
    params.append('max_res', maxRes.toString());
    httpOptions['params'] = params;
    return this.http.post<Decode>(this.url, JSON.stringify({word: word}), httpOptions);
  }
}
