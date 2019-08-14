import { Component, OnInit } from '@angular/core';
import { ServersRoutingService } from './servers.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routing-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class RoutingServersComponent implements OnInit {

  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversRoutingService: ServersRoutingService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversRoutingService.getServers();
  }

  onReload(type: string) {
    if (type === 'noerror') {
      // this.router.navigate(['servers']);
      this.router.navigate(['/servers']);
    } else if (type === 'error') {
      this.router.navigate(['servers'], {relativeTo: this.route});
    }
  }

}
