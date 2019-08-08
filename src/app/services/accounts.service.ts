import { LoggingService } from './logging.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AccountsService {
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
    ];

    constructor(private loggingService: LoggingService) {}

    statusUpdated = new EventEmitter<string>();

    addAccount(name: string, status: string) {
        // tslint:disable-next-line: object-literal-shorthand
        this.accounts.push({name: name, status: status});
        this.loggingService.loggingStatusChange('Server "' + name + '" status changed to: ' + status);
    }

    updateStatus(id: number, status: string) {
        this.accounts[id].status = status;
        this.loggingService.loggingStatusChange('Status changed for server with id "' + id + '", new status: ' + status);
    }
}
