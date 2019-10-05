import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'camelcase'
})
export class CamelCase implements PipeTransform {
    transform(value: string, proceed: boolean) {
        if (proceed) {
            const valueArray: string[] = value.split(' ');
            let tempValue = '';
            for (const currentValue of valueArray) {
                // value = aakash
                tempValue += currentValue.charAt(0).toUpperCase(); // tempValue = A
                tempValue += currentValue.substr(1); // tempValue = A + akash
                tempValue += ' '; // tempValue = A + akash + ' '
            }
            // console.log(tempValue);
            return tempValue.trim();
        } else {
            return value;
        }
    }
}
