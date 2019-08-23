import { Component, OnInit } from '@angular/core';
import { ServersRoutingService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-routing-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class RoutingServerComponent implements OnInit {

  server: {id: number, name: string, status: string};

  constructor(private serversRoutingService: ServersRoutingService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.params.id;
    this.server = this.serversRoutingService.getServer(id);
    this.route.params.subscribe(
      (param: Params) => {
        this.server = this.serversRoutingService.getServer(+param.id);
      }
    );
  }
}
