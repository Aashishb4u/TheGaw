import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HydraulicPullersComponent } from './hydraulic-pullers.component';

describe('HydraulicPullersComponent', () => {
  let component: HydraulicPullersComponent;
  let fixture: ComponentFixture<HydraulicPullersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HydraulicPullersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HydraulicPullersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
