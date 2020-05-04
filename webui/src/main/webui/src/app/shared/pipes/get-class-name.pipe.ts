import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'getClassName'})
export class GetClassNamePipe implements PipeTransform {
  transform(values: any[], classes: any[]): any[] {
    return values.map(c => getLabel(c, classes));
  }
}

export function getLabel(value: any, classes: any[]) {
  let label = '';
  classes.every(c => {
    if(c.value === value) {
      label = c.label;
      return false;
    }
    return true;
  });
  return label;
}
