import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { DecodeService } from './decode.service';

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  providers: [DecodeService]
})
export class DecodeModule { }
