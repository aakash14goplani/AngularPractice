import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ServerComponent } from './server/server.component';
import { NestedServersComponent } from './nested-servers/nested-servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { AdvancedComponentsComponent } from './advanced-components/advanced-components.component';
import { OuterComponentComponent } from './advanced-components/outer-component/outer-component.component';
import { InnerComponentComponent } from './advanced-components/inner-component/inner-component.component';
import { DangerAlertComponent } from './warning-alert/danger-alert/danger-alert.component';
import { GameControlComponent } from './advanced-components/game-control/game-control.component';
import { OddComponent } from './advanced-components/game-control/odd/odd.component';
import { EvenComponent } from './advanced-components/game-control/even/even.component';
import { BasicHighlightDirective } from './advanced-directives/basic-highlight/basic-highlight.directive';
import { BatterHighlightDirective } from './advanced-directives/better-highlight/batter-highlight.directive';
import { AdvancedDirectivesComponent } from './advanced-directives/advanced-directives.component';
import { OddGeneratorDirective } from './advanced-directives/odd-generator/odd-generator.directive';
import { ServicesComponent } from './services/services.component';
import { AccountComponent } from './services/account/account.component';
import { NewAccountComponent } from './services/new-account/new-account.component';
import { AssignmentComponent } from './services/assignment/assignment.component';
import { ActiveUsersComponent } from './services/assignment/active-users/active-users.component';
import { InactiveUsersComponent } from './services/assignment/inactive-users/inactive-users.component';
import { RoutingComponent } from './routing/routing.component';
import { UsersComponent } from './routing/users/users.component';
import { UserComponent } from './routing/users/user/user.component';
import { RoutingServersComponent } from './routing/servers/servers.component';
import { RoutingServerComponent } from './routing/servers/server/server.component';
import { EditRoutingServerComponent } from './routing/servers/edit-server/edit-server.component';
import { HomeComponent } from './routing/home/home.component';
import { AuthGuard } from './routing/routing-services/auth-guard.service';
import { AuthService } from './routing/routing-services/auth.service';
import { CanDeactivateGuard } from './routing/servers/edit-server/can-deactivate-guard.service';
import { ServerResolver } from './routing/servers/server/server-resolver.service';
import { ServersRoutingService } from './routing/servers/servers.service';
import { ObservablesComponent } from './observables/observables.component';
import { UserObservableComponent } from './observables/user-observable/user-observable.component';
import { HomeObservableComponent } from './observables/home-observable/home-observable.component';
import { AngularFormsComponent } from './angular-forms/angular-forms.component';
import { TdFormAssignmentComponent } from './angular-forms/td-form-assignment/td-form-assignment.component';
import { ReactiveFormsComponent } from './angular-forms/reactive-forms/reactive-forms.component';
import { ReactiveAssignmentComponent } from './angular-forms/reactive-assignment/reactive-assignment.component';
import { PipesComponent } from './pipes/pipes.component';
import { CamelCase } from './pipes/camelcase.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { HighlighterPipe } from './pipes/highlighter.pipe';
import { HttpComponent } from './http/http.component';
import { TestingComponent } from './testing/testing.component';
import { AuthInterceptorService } from './http/auth-interceptor.service';
import { LoggingInterceptorService } from './http/logging-interceptor.service';

import { HeaderComponent } from './header/header.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';

@NgModule({
  declarations: [
    AppComponent,

    ServerComponent,
    NestedServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    AdvancedComponentsComponent,
    OuterComponentComponent,
    InnerComponentComponent,
    DangerAlertComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    BasicHighlightDirective,
    AdvancedDirectivesComponent,
    BatterHighlightDirective,
    OddGeneratorDirective,
    ServicesComponent,
    AccountComponent,
    NewAccountComponent,
    AssignmentComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    RoutingComponent,
    UsersComponent,
    UserComponent,
    RoutingServersComponent,
    RoutingServerComponent,
    EditRoutingServerComponent,
    HomeComponent,
    ObservablesComponent,
    UserObservableComponent,
    HomeObservableComponent,
    AngularFormsComponent,
    TdFormAssignmentComponent,
    ReactiveFormsComponent,
    ReactiveAssignmentComponent,
    PipesComponent,
    CamelCase,
    FilterPipe,
    HighlighterPipe,
    HttpComponent,
    TestingComponent,

    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    CoreModule
  ],
  providers: [
    AuthGuard, AuthService, CanDeactivateGuard, ServerResolver, ServersRoutingService,
    /* {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoggingInterceptorService,
      multi: true
    }, */
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
