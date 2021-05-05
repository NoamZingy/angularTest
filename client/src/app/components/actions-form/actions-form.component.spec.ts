import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsFormComponent } from './actions-form.component';

describe('ActionsFormComponent', () => {
  let component: ActionsFormComponent;
  let fixture: ComponentFixture<ActionsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
