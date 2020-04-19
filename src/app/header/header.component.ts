import { Component, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { UserAuthService } from '../auth/user-auth.service';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit, OnDestroy {
    collapsed: boolean = true;
    /* @Output() displayContents = new EventEmitter<string>();

    displayContentFor(contentType: string) {
        this.displayContents.emit(contentType);
    } */

    constructor(
        private dataStorageService: DataStorageService,
        private authService: UserAuthService,
        private store: Store<fromApp.AppState>
    ) {}

    private userSubscription: Subscription;
    isAuthenticated: boolean = false;

    ngOnInit(): void {
        // this.userSubscription = this.authService.user.subscribe(user => {
        this.userSubscription = this.store.select('auth').subscribe(user => {
            this.isAuthenticated = !!user.user;
            /* console.log('user: ', user);
            console.log('!user: ', !user);
            console.log('!!user: ', !!user); */
        });
    }

    saveRecipes(): void {
        this.dataStorageService.storeRecipes();
    }

    fetchRecipes(): void {
        this.dataStorageService.fetchRecipes().subscribe();
    }

    logout(): void {
        this.authService.logout();
    }

    ngOnDestroy(): void {
        this.userSubscription.unsubscribe();
    }
}
