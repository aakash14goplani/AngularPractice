import {Component} from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        h3 { color:red; }
        h6 { color:blue; }
    `]
})
export class ServerComponent {
    imageURL: string = 'https://avatars3.githubusercontent.com/u/13452115?s=460&v=4';
    width: number = 230;
    height: number = 230;
    align: string = 'left';
    someString: string = '';

    onClickChangeAlignment() {
        let align: string[] = ['top', 'middle', 'bottom', 'left', 'right'];
        let index: number = Math.floor(Math.random() * 4);
        return this.align = align[index];
    }

    printData(event: Event) {
        return this.someString = (<HTMLInputElement>event.target).value;
    }
/* notes about casting, error faced, $event. Two-Way-Binding (covered in the next lecture) to work, you need to enable the ngModel  directive. This is done by adding the FormsModule  to the imports[]  array in the AppModule.

You then also need to add the import from @angular/forms  in the app.module.ts file:

import { FormsModule } from '@angular/forms'; */
}
