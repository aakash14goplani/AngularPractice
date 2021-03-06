import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nested-servers',
  // template: '<h4>inline HTML</h4>',
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
  serversCollection: any[] = [
    {id: 1, name: 'Server 1'},
    {id: 2, name: 'Server 2'},
    {id: 3, name: 'Server 3'},
    {id: 4, name: 'Server 4'},
  ];
  toggleValue: boolean = true;
  logToggleValues: any[] = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
    this.serverId = Math.floor(Math.random() * 10) + 1;
  }

  toggleVariableValue() {
    this.toggleValue = !this.toggleValue;

    const currentDate = new Date();
    // tslint:disable-next-line: max-line-length
    this.logToggleValues.push(currentDate.getHours() + ':' + currentDate.getMinutes() +  ':' + currentDate.getSeconds() + ':' + currentDate.getMilliseconds());
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

  addServerInstance() {
    this.serversCollection.push({id: this.serverId, name: this.serverName});
    // return '';
  }

}
