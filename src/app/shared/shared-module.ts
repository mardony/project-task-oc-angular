import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './pipes/capitalize/capitalize-pipe';
import { DateFormatPipe } from './pipes/date/date-format-pipe';
import { EdadPipe } from './pipes/calculate/edad-pipe';



@NgModule({
  declarations: [
    CapitalizePipe,
    DateFormatPipe,
    EdadPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CapitalizePipe,
    DateFormatPipe,
    EdadPipe
  ]
})
export class SharedModule { }
