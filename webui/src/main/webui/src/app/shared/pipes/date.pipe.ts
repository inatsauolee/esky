import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'date'})
export class DatePipe implements PipeTransform {
  transform(date: Date): string {
    return JSON.stringify(date).slice(1, 11);
  }
}