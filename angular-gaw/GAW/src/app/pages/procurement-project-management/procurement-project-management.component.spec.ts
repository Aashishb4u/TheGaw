import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcurementProjectManagementComponent } from './procurement-project-management.component';

describe('ProcurementProjectManagementComponent', () => {
  let component: ProcurementProjectManagementComponent;
  let fixture: ComponentFixture<ProcurementProjectManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProcurementProjectManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcurementProjectManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
