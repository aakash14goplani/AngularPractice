import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inner-component',
  templateUrl: './inner-component.component.html',
  styleUrls: ['./inner-component.component.css']
})
export class InnerComponentComponent implements OnInit {

  // @Input() element: {type: string, name: string, content: string};
  // tslint:disable-next-line: no-input-rename
  @Input('customElement') element: {type: string, serverName: string, serverContent: string};

  constructor() { }

  ngOnInit() {
  }

}
