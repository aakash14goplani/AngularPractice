import { Component, OnInit } from '@angular/core';
import { ServersRoutingService } from '../servers.service';

@Component({
  selector: 'app-routing-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class RoutingServerComponent implements OnInit {

  server: {id: number, name: string, status: string};

  constructor(private serversRoutingService: ServersRoutingService) { }

  ngOnInit() {
    this.server = this.serversRoutingService.getServer(1);
  }

}
