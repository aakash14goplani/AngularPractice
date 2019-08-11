import { Component, OnInit } from '@angular/core';
import { ServersRoutingService } from './servers.service';

@Component({
  selector: 'app-routing-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class RoutingServersComponent implements OnInit {

  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversRoutingService: ServersRoutingService) { }

  ngOnInit() {
    this.servers = this.serversRoutingService.getServers();
  }

}
