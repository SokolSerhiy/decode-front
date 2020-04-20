import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { DecodeService } from './decode.service';
import { DecodeComponent } from './decode.component';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [DecodeComponent],
  imports: [HttpClientModule, CommonModule, ReactiveFormsModule],
  providers: [DecodeService]
})
export class DecodeModule { }
