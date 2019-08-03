import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    collapsed: boolean = true;
    @Output() displayContents = new EventEmitter<string>();

    displayContentFor(contentType: string) {
        this.displayContents.emit(contentType);
    }
}
