import {Component} from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        h3 { color:red; }
        h6 { color:blue;  }
    `]
})
export class ServerComponent {
    stringVariable = 'From Server Component: server.component.ts';
}
