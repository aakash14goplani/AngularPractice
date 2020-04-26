import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

/* import { HomeComponent } from './routing/home/home.component';
import { UsersComponent } from './routing/users/users.component';
import { UserComponent } from './routing/users/user/user.component';
import { AuthGuard } from './routing/routing-services/auth-guard.service';
import { RoutingServersComponent } from './routing/servers/servers.component';
import { RoutingServerComponent } from './routing/servers/server/server.component';
import { EditRoutingServerComponent } from './routing/servers/edit-server/edit-server.component';
import { CanDeactivateGuard } from './routing/servers/edit-server/can-deactivate-guard.service';
import { ServerResolver } from './routing/servers/server/server-resolver.service';
import { HomeObservableComponent } from './observables/home-observable/home-observable.component';
import { UserObservableComponent } from './observables/user-observable/user-observable.component';
import { PageNotFoundComponent } from './routing/page-not-found/page-not-found.component';

const appRoute: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent }
    ] },
    { path: 'servers', canActivateChild: [AuthGuard], component: RoutingServersComponent, children: [
      { path: ':id', component: RoutingServerComponent, resolve: {server: ServerResolver} },
      { path: ':id/edit', component: EditRoutingServerComponent, canDeactivate: [CanDeactivateGuard] }
    ]}, // canActivate: [AuthGuard] },
    { path: 'page-not-found', component: PageNotFoundComponent, data: {message: 'Please double check the URL entered'} },
    { path: '**', redirectTo: '/page-not-found' }
];

const observables = [
  { path: '', component: HomeObservableComponent },
  { path: 'user/:id', component: UserObservableComponent },
  { path: 'page-not-found', component: PageNotFoundComponent, data: {message: 'Please double check the URL entered'} },
  { path: '**', redirectTo: '/page-not-found' }
]; */

const recipesAppRoute: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  // { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' }
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((mod) => mod.AuthModule)
  },
  {
    path: 'recipes',
    loadChildren: () => import('./recipes/recipes.module').then((mod) => mod.RecipesModule)
  },
  {
    path: 'shopping-list',
    loadChildren: () => import('./shopping-list/shopping-list.module').then((mod) => mod.ShoppingListModule)
  },
  { path: '**', component: PageNotFoundComponent, data: {message: 'Please double check the URL entered'} }
];

@NgModule({
    imports: [
      RouterModule.forRoot(recipesAppRoute, { preloadingStrategy: PreloadAllModules, initialNavigation: 'enabled' })
      /* RouterModule.forRoot(appRoute, { useHash: true })
        RouterModule.forRoot(appRoute)
        RouterModule.forRoot(observables) */
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
