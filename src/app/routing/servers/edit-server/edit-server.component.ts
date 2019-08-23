import { Component, OnInit } from '@angular/core';
import { ServersRoutingService } from '../servers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-routing-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditRoutingServerComponent implements OnInit {

  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';

  constructor(private serversRoutingService: ServersRoutingService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('queryParams: ', this.route.snapshot.queryParams);
    console.log('fragments: ', this.route.snapshot.fragment);
    this.route.queryParams.subscribe();
    this.route.fragment.subscribe();

    this.server = this.serversRoutingService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversRoutingService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
