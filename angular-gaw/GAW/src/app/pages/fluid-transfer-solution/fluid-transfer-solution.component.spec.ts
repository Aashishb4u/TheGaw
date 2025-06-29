import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluidTransferSolutionComponent } from './fluid-transfer-solution.component';

describe('FluidTransferSolutionComponent', () => {
  let component: FluidTransferSolutionComponent;
  let fixture: ComponentFixture<FluidTransferSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FluidTransferSolutionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FluidTransferSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
