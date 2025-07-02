import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowProfileTorqueWrenchComponent } from './low-profile-torque-wrench.component';

describe('LowProfileTorqueWrenchComponent', () => {
  let component: LowProfileTorqueWrenchComponent;
  let fixture: ComponentFixture<LowProfileTorqueWrenchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LowProfileTorqueWrenchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LowProfileTorqueWrenchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
