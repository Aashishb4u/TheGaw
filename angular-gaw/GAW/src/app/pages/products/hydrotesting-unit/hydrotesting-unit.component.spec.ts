import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HydrotestingUnitComponent } from './hydrotesting-unit.component';

describe('HydrotestingUnitComponent', () => {
  let component: HydrotestingUnitComponent;
  let fixture: ComponentFixture<HydrotestingUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HydrotestingUnitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HydrotestingUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
