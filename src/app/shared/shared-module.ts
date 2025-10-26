import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './pipes/capitalize/capitalize-pipe';



@NgModule({
  declarations: [
    CapitalizePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CapitalizePipe
  ]
})
export class SharedModule { }
