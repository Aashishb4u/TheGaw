import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HydrotestingChemicalInjectionSkidsComponent } from './hydrotesting-chemical-injection-skids.component';

describe('HydrotestingChemicalInjectionSkidsComponent', () => {
  let component: HydrotestingChemicalInjectionSkidsComponent;
  let fixture: ComponentFixture<HydrotestingChemicalInjectionSkidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HydrotestingChemicalInjectionSkidsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HydrotestingChemicalInjectionSkidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
