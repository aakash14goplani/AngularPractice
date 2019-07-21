import {Component} from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        h3 { color:red; }
        h6 { color:blue; }
        .margin-20-top-bottom { margin: 20px 0;}
    `]
})
export class ServerComponent {
    imageURL: string = 'https://avatars3.githubusercontent.com/u/13452115';
    width: number = 230;
    height: number = 230;
    align: string = 'left';
    someString: string = '';
    username: string = '';

    onClickChangeAlignment() {
        const align: string[] = ['top', 'middle', 'bottom', 'left', 'right'];
        const index: number = Math.floor(Math.random() * 4);
        return this.align = align[index];
    }

    printData(event: Event) {
        // console.log(event);
        return this.someString = ( event.target as HTMLInputElement).value;
    }

    isUsernameEmpty() {
        if (this.username.length > 0) {
            return false;
        } else {
            return true;
        }
    }

    deleteUsername() {
        return this.username = '';
    }
// tslint:disable-next-line: max-line-length
/* error faced. Event-bubbling */
}
