/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GraphBarComponent } from './graph-bar.component';

describe('GraphBarComponent', () => {
  let component: GraphBarComponent;
  let fixture: ComponentFixture<GraphBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
