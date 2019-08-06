import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4childComponent } from './comp4child.component';

describe('Comp4childComponent', () => {
  let component: Comp4childComponent;
  let fixture: ComponentFixture<Comp4childComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4childComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4childComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
