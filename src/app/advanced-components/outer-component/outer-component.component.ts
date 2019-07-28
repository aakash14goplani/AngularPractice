import { Component, OnInit, EventEmitter, Output, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-outer-component',
  templateUrl: './outer-component.component.html',
  styleUrls: ['./outer-component.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class OuterComponentComponent implements OnInit {

  serverName: string = '';
  serverContents: string = '';
  templateReferenceValue: string = '';
  @ViewChild('viewChild', {static: false}) viewChildReferenceValue: ElementRef;
  tempVar = '';
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

  testTemplateReference(templateReference: HTMLInputElement) {
    this.templateReferenceValue = templateReference.value;
  }

  viewChildReference() {
    this.tempVar = this.viewChildReferenceValue.nativeElement.value;
  }
}
