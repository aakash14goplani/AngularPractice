export class AdvancedSharedComponent {

    constructor() {
    }

    propertyArray: string[] = [];

    printProperties(property: string) {
        if (property !== undefined && property !== null) {
            this.propertyArray.push(property);
            // console.log('len shrd: ', this.propertyArray.length);
        }
    }

    applyStyles(hook: string) {
        if (hook.startsWith('Main')) {
            return {color: 'red'};
        } else if (hook.startsWith('Outer')) {
            return {color: 'blue'};
        } else if (hook.startsWith('Inner')) {
            return {color: 'green'};
        } else {
            return {color: 'black'};
        }
    }
}
