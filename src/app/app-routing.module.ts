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

@NgModule({
    imports: [
        // RouterModule.forRoot(appRoute, { useHash: true })
        RouterModule.forRoot(appRoute)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}
