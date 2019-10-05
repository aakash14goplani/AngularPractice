import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string, propertyName: string): any {
    if (filterString && propertyName) {
      const resultArray = [];
      for (const server of value) {
        if (server[propertyName] === filterString) {
          resultArray.push(server);
        }
      }
      return resultArray;
    } else {
      return value;
    }
  }
}
