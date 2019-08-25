import { Component, OnInit } from '@angular/core';
import { ServersRoutingService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CanComponentDeactivate } from './can-deactivate-guard.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-routing-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditRoutingServerComponent implements OnInit, CanComponentDeactivate {

  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit: boolean = false;
  changesSaved: boolean = false;

  constructor(private serversRoutingService: ServersRoutingService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    console.log('queryParams: ', this.route.snapshot.queryParams);
    console.log('fragments: ', this.route.snapshot.fragment);
    this.route.queryParams.subscribe(
      (queryParams: Params) => {
        this.allowEdit = (queryParams.allowEdit === '1') ? true : false;
      }
    );
    this.route.fragment.subscribe();

    let id = +this.route.snapshot.params.id;
    this.route.params.subscribe(
      (param: Params) => {
        id = +param.id;
      }
    );
    this.server = this.serversRoutingService.getServer(id);

    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversRoutingService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.allowEdit) {
      return true;
    }
    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved) {
      return confirm('Do you want to discard changes?');
    } else {
      return true;
    }
  }

}
