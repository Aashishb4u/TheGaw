import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PneumaticTorqueWrenchComponent } from './pneumatic-torque-wrench.component';

describe('PneumaticTorqueWrenchComponent', () => {
  let component: PneumaticTorqueWrenchComponent;
  let fixture: ComponentFixture<PneumaticTorqueWrenchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PneumaticTorqueWrenchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PneumaticTorqueWrenchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
