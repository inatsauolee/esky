import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'pageNumber'})
export class PageNumberPipe implements PipeTransform {
  transform(page: string): number {
    return Number.parseInt(page) + 1;
  }
}
