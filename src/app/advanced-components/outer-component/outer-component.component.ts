import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-outer-component',
  templateUrl: './outer-component.component.html',
  styleUrls: ['./outer-component.component.css']
})
export class OuterComponentComponent implements OnInit {

  serverName: string = '';
  serverContents: string = '';
  // serverDetailsArray: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  addServerContentsToArray(inputType: string) {
    let contentType = '';
    if (inputType !== undefined) {
      if (inputType.toLocaleLowerCase() === 'server') {
        contentType = 'server';
      } else if (inputType.toLocaleLowerCase() === 'blueprint') {
        contentType = 'blueprint';
      } else {
        contentType = 'error';
      }
      this.serverDetailsArray.push({
        type: contentType,
        name: this.serverName,
        content: this.serverContents
      });
    }
  }

}
