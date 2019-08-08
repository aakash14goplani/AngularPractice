import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {

  constructor(private loggingService: LoggingService,
              private accountsService: AccountsService) {
    this.accountsService.statusUpdated.subscribe((status) => console.log('Communication successful! ' + status));
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    // this.loggingService.loggingStatusChange('A server status changed, new status: ' + accountStatus);
  }

  ngOnInit() {
  }

}
