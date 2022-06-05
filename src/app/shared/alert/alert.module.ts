import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeModule } from 'src/app/_pipes/pipe.module';
import { AlertComponent } from './alert.component';

@NgModule({
  imports: [
    CommonModule,
    PipeModule
  ],
  declarations: [AlertComponent],
  exports: [AlertComponent]
})
export class AlertModule { }
