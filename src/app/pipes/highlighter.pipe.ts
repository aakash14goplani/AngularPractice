import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlighter'
})
export class HighlighterPipe implements PipeTransform {

  transform(value: any, sortValues: string, modifyDates: boolean): any {
    if (value instanceof Array && sortValues) {
      value.sort((a, b) => {
        if (a[sortValues].toLowerCase() > b[sortValues].toLowerCase()) {
          return 1;
        }
        if (a[sortValues].toLowerCase() < b[sortValues].toLowerCase()) {
          return -1;
        }
        return 0;
      });
    }
    if (modifyDates) {
      let reversedString = '';
      for (const server of value) {
        const currentString = server.instanceType;
        for (let index = currentString.length - 1; index >= 0; index--) {
          reversedString += currentString.charAt(index);
        }
        server.instanceType = reversedString;
        reversedString = '';
      }
    }
    return value;
  }

}
