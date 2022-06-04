import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PositivePipe } from './positive-number.pipe';

@NgModule({
  declarations: [PositivePipe],
  imports: [CommonModule],
  exports: [PositivePipe],
})
export class PipeModule {}
