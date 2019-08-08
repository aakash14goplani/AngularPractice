import { Component, OnInit, Input } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent implements OnInit {

  constructor(private loggingService: LoggingService,
              private accountsService: AccountsService) { }

  @Input() account: {name: string, status: string};
  @Input() id: number;


  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    // this.loggingService.loggingStatusChange('A server status changed, new status: ' + status);
    this.accountsService.statusUpdated.emit(status);
  }

  ngOnInit() {
  }

}
