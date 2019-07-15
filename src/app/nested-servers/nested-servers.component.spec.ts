import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedServersComponent } from './nested-servers.component';

describe('NestedServersComponent', () => {
  let component: NestedServersComponent;
  let fixture: ComponentFixture<NestedServersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NestedServersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NestedServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
