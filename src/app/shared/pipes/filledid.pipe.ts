import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filledid'
})
export class FilledidPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.padStart(4, '0');
  }

}
