import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './routing/home/home.component';
import { UsersComponent } from './routing/users/users.component';
import { UserComponent } from './routing/users/user/user.component';
import { AuthGuard } from './routing/routing-services/auth-guard.service';
import { RoutingServersComponent } from './routing/servers/servers.component';
import { RoutingServerComponent } from './routing/servers/server/server.component';
import { EditRoutingServerComponent } from './routing/servers/edit-server/edit-server.component';
import { PageNotFoundComponent } from './routing/page-not-found/page-not-found.component';
import { CanDeactivateGuard } from './routing/servers/edit-server/can-deactivate-guard.service';
import { ServerResolver } from './routing/servers/server/server-resolver.service';
import { HomeObservableComponent } from './observables/home-observable/home-observable.component';
import { UserObservableComponent } from './observables/user-observable/user-observable.component';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesStartComponent } from './recipes/recipes-start/recipes-start.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const appRoute: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent }
    ] },
    { path: 'servers', /*canActivate: [AuthGuard],*/ canActivateChild: [AuthGuard], component: RoutingServersComponent, children: [
      { path: ':id', component: RoutingServerComponent, resolve: {server: ServerResolver} },
      { path: ':id/edit', component: EditRoutingServerComponent, canDeactivate: [CanDeactivateGuard] }
    ] },
    { path: 'page-not-found', component: PageNotFoundComponent, data: {message: 'Please double check the URL entered'} },
    { path: '**', redirectTo: '/page-not-found' }
];

const recipesAppRoute = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: RecipesStartComponent },
    { path: 'new', component: RecipeEditComponent },
    { path: ':id', component: RecipeDetailComponent },
    { path: ':id/edit', component: RecipeEditComponent }
  ] },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'page-not-found', component: PageNotFoundComponent, data: {message: 'Please double check the URL entered'} },
  { path: '**', redirectTo: '/page-not-found' }
];

const observables = [
  { path: '', component: HomeObservableComponent },
  { path: 'user/:id', component: UserObservableComponent },
  { path: 'page-not-found', component: PageNotFoundComponent, data: {message: 'Please double check the URL entered'} },
  { path: '**', redirectTo: '/page-not-found' }
];

@NgModule({
    imports: [
        // RouterModule.forRoot(appRoute, { useHash: true })
        // RouterModule.forRoot(appRoute)
        // RouterModule.forRoot(recipesAppRoute)
        // RouterModule.forRoot(observables)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}
