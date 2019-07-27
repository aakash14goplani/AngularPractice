import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-outer-component',
  templateUrl: './outer-component.component.html',
  styleUrls: ['./outer-component.component.css']
})
export class OuterComponentComponent implements OnInit {

  serverName: string = '';
  serverContents: string = '';
  // @Output() contentCreated = new EventEmitter<{type: string, serverName: string, serverContents: string}>();
  // tslint:disable-next-line: no-output-rename
  @Output('customElement') contentCreated = new EventEmitter<{type: string, serverName: string, serverContents: string}>();

  constructor() { }

  ngOnInit() {
  }

  addServerContentsToArray(inputType: string) {
    this.contentCreated.emit({
      type: inputType,
      serverName: this.serverName,
      serverContents: this.serverContents
    });
  }
}
