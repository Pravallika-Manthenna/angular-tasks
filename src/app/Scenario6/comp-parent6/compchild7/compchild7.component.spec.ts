import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Compchild7Component } from './compchild7.component';

describe('Compchild7Component', () => {
  let component: Compchild7Component;
  let fixture: ComponentFixture<Compchild7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Compchild7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Compchild7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
