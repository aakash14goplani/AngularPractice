import { Component, Output, EventEmitter } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    /* collapsed: boolean = true;
    @Output() displayContents = new EventEmitter<string>();

    displayContentFor(contentType: string) {
        this.displayContents.emit(contentType);
    } */

    constructor(private dataStorageService: DataStorageService) {}

    saveRecipes(): void {
        this.dataStorageService.storeRecipes();
    }

    fetchRecipes(): void {
        this.dataStorageService.fetchRecipes().subscribe();
    }
}
