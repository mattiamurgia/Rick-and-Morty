import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutWord',
})
export class CutWordPipe implements PipeTransform {
  transform(value: string): string {
    return value.length > 5 ? value.slice(0, 4) : value;
  }
}
