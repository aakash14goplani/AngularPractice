import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

import { AdvancedSharedComponent } from './shared-component.component';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-advanced-components',
  templateUrl: './advanced-components.component.html',
  styleUrls: ['./advanced-components.component.css']
})
export class AdvancedComponentsComponent implements OnInit, OnChanges, DoCheck,
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  serverDetailsArray: any[] = [
    {type: 'server', serverName: 'test_server_name', serverContent: 'test_server_contents'},
    {type: 'blueprint', serverName: 'test_server_blueprint', serverContent: 'test_blueprint_contents'}
  ];

  lifeCycleHook: string[] = [];
  inst:AdvancedSharedComponent = new AdvancedSharedComponent();

  constructor() {
    this.lifeCycleHook.push('Main Constructor');
    this.inst.printProperties('Main Constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.lifeCycleHook.push('Main OnChanges');
    this.inst.printProperties('Main OnChanges');
  }

  ngOnInit() {
    this.lifeCycleHook.push('Main OnInit');
    this.inst.printProperties('Main Constructor');
  }

  ngDoCheck(): void {
    this.lifeCycleHook.push('Main DoCheck');
    this.inst.printProperties('Main Constructor');
    // console.log('len main: ' + this.inst.printProperties.length);
  }

  ngAfterContentInit(): void {
    this.lifeCycleHook.push('Main AfterContentInit');
    this.inst.printProperties('Main Constructor');
  }

  ngAfterContentChecked(): void {
    this.lifeCycleHook.push('Main AfterContentChecked');
    this.inst.printProperties('Main Constructor');
  }

  ngAfterViewInit(): void {
    this.lifeCycleHook.push('Main AfterViewInit');
    this.inst.printProperties('Main Constructor');
  }

  ngAfterViewChecked(): void {
    this.lifeCycleHook.push('Main AfterViewChecked');
    this.inst.printProperties('Main Constructor');
  }

  ngOnDestroy(): void {
    this.lifeCycleHook.push('Main OnDestroy');
    this.inst.printProperties('Main Constructor');
  }

  inputFromInner(inputData: Array<string>) {
    this.lifeCycleHook = inputData;
  }

  inputFromOuter(outputData: Array<string>) {
    this.lifeCycleHook = outputData;
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

  applyStyles(hook: string) {
    if (hook.startsWith('Main')) {
      return {color: 'red'};
    } else if (hook.startsWith('Outer')) {
      return {color: 'blue'};
    } else if (hook.startsWith('Inner')) {
      return {color: 'green'};
    } else {
      return {color: 'black'};
    }
  }
}
