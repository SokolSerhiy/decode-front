import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DecodeService } from './decode/decode.service';
import {Observable} from 'rxjs';
import {Decode} from './decode/decode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  word = new FormControl('');
  maxRes = new FormControl('');
  result: Decode;
  constructor(private service: DecodeService) { }
  code() {
    const word = this.word.value;
    const maxRes = this.maxRes.value as number;
    console.log(word);
    console.log(maxRes);
    this.word.setValue('');
    this.service.code(word, maxRes === null ? 10 : maxRes).subscribe((res: Decode) => this.result = res);
  }
}
