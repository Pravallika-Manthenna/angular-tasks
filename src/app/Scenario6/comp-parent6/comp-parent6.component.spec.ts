import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompParent6Component } from './comp-parent6.component';

describe('CompParent6Component', () => {
  let component: CompParent6Component;
  let fixture: ComponentFixture<CompParent6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompParent6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompParent6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
