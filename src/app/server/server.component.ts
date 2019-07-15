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
}
