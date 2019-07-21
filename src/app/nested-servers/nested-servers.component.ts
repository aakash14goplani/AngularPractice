import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nested-servers',
  template: '<h4>inline HTML</h4>',
  templateUrl: './nested-servers.component.html',
  styleUrls: ['./nested-servers.component.css']
})
export class NestedServersComponent  {
  serverId: number = 10;
  serverStatus: string = '';
  allowNewServer: boolean = false;
  serverCreated: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverName: string = 'Test_Server_';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
  }

  getServerStatus() {
    return this.serverStatus; // one time initialization in constructor to avoid error below
    // return Math.random() > 0.5 ? 'Online' : 'Offline'; => Error: ExpressionChangedAfterItHasBeenCheckedError
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (event.target as HTMLInputElement).value;
  }

  getColor() {
    return this.serverStatus === 'Online' ? 'green' : 'red';
  }

}
