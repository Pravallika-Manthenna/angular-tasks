import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompParent4Component } from './comp-parent4.component';

describe('CompParent4Component', () => {
  let component: CompParent4Component;
  let fixture: ComponentFixture<CompParent4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompParent4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompParent4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
