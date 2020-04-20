import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-multi-component',
  templateUrl: 'multi.component.html',
  styleUrls: ['multi.component.css']
})
export class MultiComponent {
  tables: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  example = 'Виберіть таблицю';
  answer: string;
  selectedTables: string[] = [];
  res = new FormControl('');
  message: string;
  enterNumber(number: string) {
    this.res.setValue(this.res.value + number);
  }
  clearOne() {
    if (this.res.value.isEmpty) {
      return;
    }
    this.res.setValue(this.res.value.substring(0, this.res.value.length - 1));
  }
  clearAll() {
    this.res.setValue('');
  }
  toggleTable(table: string) {
    if (this.selectedTables.find(value => table === value)) {
      this.selectedTables = this.selectedTables.filter(value => table !== value);
    } else {
      this.selectedTables.push(table);
    }
    this.makeExample();
  }
  makeExample() {
    if (!this.selectedTables.length) {
      this.example = 'Виберіть таблицю';
    } else {
      const mult1 = this.selectedTables[this.getRandomInt(this.selectedTables.length)];
      const mult2 = this.tables[this.getRandomInt(this.tables.length)];
      this.example = `${mult1} * ${mult2}`;
      // tslint:disable-next-line:radix
      this.answer = (parseInt(mult1) * parseInt(mult2)).toString();
    }
  }
  getRandomInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
  }
  check() {
    if (this.answer === this.res.value) {
      this.message = 'Вірно';
    } else {
      this.message = 'Не вірно';
    }
    this.makeExample();
    this.clearAll();
  }
}
