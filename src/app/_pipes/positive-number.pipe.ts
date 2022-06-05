import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'positiveNumber'
})
export class PositivePipe implements PipeTransform {

  transform(value: number): number {
    return Math.abs(value);
  }

}
