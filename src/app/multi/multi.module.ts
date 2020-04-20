import { NgModule } from '@angular/core';
import { MultiService } from './multi.service';
import { MultiComponent } from './multi.component';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [MultiComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [MultiService]
})
export class MultiModule { }
