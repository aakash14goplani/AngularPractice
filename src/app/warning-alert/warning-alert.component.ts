import { Component, ViewChild, AfterViewInit, AfterContentInit, ViewChildren, QueryList, ChangeDetectorRef } from '@angular/core';
import { DangerAlertComponent } from './danger-alert/danger-alert.component';

@Component({
  // selector: '[app-warning-alert]',
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styles: ['h4 { color: red; }']
})
export class WarningAlertComponent implements AfterViewInit, AfterContentInit {

  constructor(private cd: ChangeDetectorRef) { }

  parentMessage: string = 'WARNING!!!';
  messageForChild: string = 'Warning -> Danger';
  messageForChildArray: string[] = ['Hello', 'Child', 'this', 'is', 'message', 'from', 'parent'];
  @ViewChild(DangerAlertComponent, {static: true}) childComponent: DangerAlertComponent;
  @ViewChildren(DangerAlertComponent) childComponentChildren: QueryList<DangerAlertComponent>;

  ngAfterViewInit(): void {
    console.log('childComponent: ', this.childComponent);
    console.log('childComponentChildren: ', this.childComponentChildren);
    this.childComponentChildren.forEach((item) => {item.childMessage = ''; });
    this.cd.detectChanges();
  }

  ngAfterContentInit(): void {
    this.childComponent.childMessage = 'Altered Danger :P';
  }

}
