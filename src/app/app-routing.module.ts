import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultiComponent } from './multi/multi.component';
import { DecodeComponent } from './decode/decode.component';

const routes: Routes = [
  { path : '', component : DecodeComponent },
  { path : 'multi', component : MultiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
