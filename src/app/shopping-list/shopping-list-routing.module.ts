import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list.component';
import { PageNotFoundComponent } from '../shared/page-not-found/page-not-found.component';

const appRoute: Routes = [
    { path: '', component: ShoppingListComponent },
    /* { path: 'page-not-found', component: PageNotFoundComponent, data: {message: 'Please double check the URL entered'} },
    { path: '**', redirectTo: '/page-not-found' } */
    { path: '**', component: PageNotFoundComponent, data: {message: 'Please double check the URL entered'} }
];

@NgModule({
    imports: [ RouterModule.forChild(appRoute) ],
    exports: [ RouterModule ]
})
export class ShoppingListRouting {}
