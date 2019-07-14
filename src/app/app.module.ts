import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { NestedServersComponent } from './nested-servers/nested-servers.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    NestedServersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
