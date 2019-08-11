import { Component, OnInit } from '@angular/core';
import { ServersRoutingService } from '../servers.service';

@Component({
  selector: 'app-edit-routing-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditRoutingServerComponent implements OnInit {

  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';

  constructor(private serversRoutingService: ServersRoutingService) { }

  ngOnInit() {
    this.server = this.serversRoutingService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversRoutingService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
