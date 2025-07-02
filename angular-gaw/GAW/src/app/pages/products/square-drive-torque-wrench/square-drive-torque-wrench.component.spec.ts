import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareDriveTorqueWrenchComponent } from './square-drive-torque-wrench.component';

describe('SquareDriveTorqueWrenchComponent', () => {
  let component: SquareDriveTorqueWrenchComponent;
  let fixture: ComponentFixture<SquareDriveTorqueWrenchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SquareDriveTorqueWrenchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SquareDriveTorqueWrenchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
