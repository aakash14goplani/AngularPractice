import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert-shared',
  templateUrl: './alert-shared.component.html',
  styleUrls: ['./alert-shared.component.css']
})
export class AlertSharedComponent implements OnInit {

  constructor() { }

  @Input() message: string = '';
  @Output() closePopUp = new EventEmitter<void>();

  ngOnInit() {
  }

  closeAlertBox(): void {
    this.closePopUp.emit();
  }

}
