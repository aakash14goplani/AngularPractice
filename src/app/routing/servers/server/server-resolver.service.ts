import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ServersRoutingService } from '../servers.service';
import { Injectable } from '@angular/core';

interface Server {
    id: number;
    name: string;
    status: string;
}

@Injectable()
export class ServerResolver implements Resolve<Server> {

    constructor(private serverService: ServersRoutingService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
        return this.serverService.getServer(+route.params.id);
    }
}
