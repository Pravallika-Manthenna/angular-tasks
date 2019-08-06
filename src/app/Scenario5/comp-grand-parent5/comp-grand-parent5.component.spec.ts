import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompGrandParent5Component } from './comp-grand-parent5.component';

describe('CompGrandParent5Component', () => {
  let component: CompGrandParent5Component;
  let fixture: ComponentFixture<CompGrandParent5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompGrandParent5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompGrandParent5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
