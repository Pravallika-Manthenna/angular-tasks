import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompChild5Component } from './comp-child5.component';

describe('CompChild5Component', () => {
  let component: CompChild5Component;
  let fixture: ComponentFixture<CompChild5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompChild5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompChild5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
