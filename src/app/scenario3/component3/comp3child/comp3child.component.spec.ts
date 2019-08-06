import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3childComponent } from './comp3child.component';

describe('Comp3childComponent', () => {
  let component: Comp3childComponent;
  let fixture: ComponentFixture<Comp3childComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3childComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3childComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
