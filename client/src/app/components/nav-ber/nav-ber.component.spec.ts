import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBerComponent } from './nav-ber.component';

describe('NavBerComponent', () => {
  let component: NavBerComponent;
  let fixture: ComponentFixture<NavBerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
