import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavcrudsComponent } from './navcruds.component';

describe('NavcrudsComponent', () => {
  let component: NavcrudsComponent;
  let fixture: ComponentFixture<NavcrudsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavcrudsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavcrudsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
