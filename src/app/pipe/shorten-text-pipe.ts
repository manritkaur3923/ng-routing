import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenText',
})
export class ShortenTextPipe implements PipeTransform {
  transform(value: string, ...args: (number | string)[]): unknown {
    if (value.length > Number(args[0])) {
      return value.slice(0, Number(args[0])) + args[1];
    }
    return value;
  }
}
