import { Component, OnInit } from '@angular/core';
import { ServersRoutingService } from './servers/servers.service';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css'],
  providers: [ServersRoutingService]
})
export class RoutingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
