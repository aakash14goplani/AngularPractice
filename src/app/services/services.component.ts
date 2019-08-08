import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  providers: [AccountsService, LoggingService]
})
export class ServicesComponent implements OnInit {

  constructor(private accountsService: AccountsService,
              private loggingService: LoggingService) { }

  accounts: {name: string, status: string}[] = [];

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }
}
