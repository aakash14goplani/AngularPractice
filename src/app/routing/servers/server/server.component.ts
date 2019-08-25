import { Component, OnInit } from '@angular/core';
import { ServersRoutingService } from '../servers.service';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

@Component({
  selector: 'app-routing-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class RoutingServerComponent implements OnInit {

  server: {id: number, name: string, status: string};

  constructor(private serversRoutingService: ServersRoutingService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // normal/standard approach
    /* const id = +this.route.snapshot.params.id;
    this.server = this.serversRoutingService.getServer(id);
    this.route.params.subscribe(
      (param: Params) => {
        this.server = this.serversRoutingService.getServer(+param.id);
      }
    ); */

    // approach using resolver guard
    this.route.data.subscribe(
      (data: Data) => {
        this.server = data.server;
      }
    );
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }
}
