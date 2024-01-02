import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changeName',
})
export class ChangeNamePipe implements PipeTransform {
  transform(value: string): string {
    return value
      ? value.split('@')[0][0].toUpperCase() +
          value.split('@')[0].slice(1).toLowerCase()
      : '';
  }
}
