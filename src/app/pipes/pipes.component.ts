import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  status: string[] = ['Online', 'Offline'];
  bgStyle: {} = {color: 'black'};
  appStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      const item = Math.random() > 0.5 ? 1 : 0;
      if (item === 0) {
        this.bgStyle = {color: 'green'};
      } else {
        this.bgStyle = {color: 'red'};
      }
      resolve(this.status[item]);
    }, 2000);
  });

  servers: Array<Server> = [
    {
      instanceType: 'medium',
      name: 'production server',
      status: 'stable',
      started: new Date()
    },
    {
      instanceType: 'large',
      name: 'user database',
      status: 'stable',
      started: new Date()
    },
    {
      instanceType: 'small',
      name: 'development server',
      status: 'offline',
      started: new Date(2019, 9, 5)
    },
    {
      instanceType: 'small',
      name: 'testing environment server',
      status: 'stable',
      started: new Date(2020, 1, 29)
    }
  ];

  filterInput: string = '';

  getStatusClasses(server: Server) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical'
    };
  }

  addServer(): void {
    this.servers.push({
      instanceType: 'medium',
      name: 'New Server',
      status: 'offline',
      started: new Date()
    });
  }
}

interface Server {
  instanceType: string;
  name: string;
  status: string;
  started: Date;
}
