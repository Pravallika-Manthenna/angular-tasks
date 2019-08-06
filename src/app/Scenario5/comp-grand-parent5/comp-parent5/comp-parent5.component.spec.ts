import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompParent5Component } from './comp-parent5.component';

describe('CompParent5Component', () => {
  let component: CompParent5Component;
  let fixture: ComponentFixture<CompParent5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompParent5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompParent5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
