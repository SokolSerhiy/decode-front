import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Decode} from './decode';
import {DecodeService} from './decode.service';

@Component({
  selector: 'app-decode-component',
  templateUrl: 'decode.component.html',
  styleUrls: ['decode.component.css']
})
export class DecodeComponent {
  word = new FormControl('');
  maxRes = new FormControl('');
  result: Decode;
  constructor(private service: DecodeService) { }
  code() {
    const word = this.word.value;
    const maxRes = this.maxRes.value as number;
    this.word.setValue('');
    this.service.code(word, maxRes === null ? 10 : maxRes).subscribe((res: Decode) => this.result = res);
  }
}
