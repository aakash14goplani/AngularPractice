import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advanced-components',
  templateUrl: './advanced-components.component.html',
  styleUrls: ['./advanced-components.component.css']
})
export class AdvancedComponentsComponent implements OnInit {

  serverDetailsArray: any[] =
  [{type: 'server', serverName: 'test_server_name', serverContent: 'test_server_contents'},
  {type: 'blueprint', serverName: 'test_server_blueprint', serverContent: 'test_blueprint_contents'}];

  constructor() { }

  ngOnInit() {
  }

  manageServerContentsArray(contentDataFromEvent: {type: string, serverName: string, serverContents: string}) {
    let contentType = '';
    if (contentDataFromEvent.type !== undefined) {
      if (contentDataFromEvent.type.toLocaleLowerCase() === 'server') {
        contentType = 'server';
      } else if (contentDataFromEvent.type.toLocaleLowerCase() === 'blueprint') {
        contentType = 'blueprint';
      } else {
        contentType = 'invalid_content_type';
      }
      this.serverDetailsArray.push({
        type: contentType,
        serverName: contentDataFromEvent.serverName,
        serverContent: contentDataFromEvent.serverContents
      });
    } else {
      console.log('input type = undefined');
    }
  }
}
