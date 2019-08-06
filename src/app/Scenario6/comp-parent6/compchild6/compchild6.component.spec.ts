import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Compchild6Component } from './compchild6.component';

describe('Compchild6Component', () => {
  let component: Compchild6Component;
  let fixture: ComponentFixture<Compchild6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Compchild6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Compchild6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
