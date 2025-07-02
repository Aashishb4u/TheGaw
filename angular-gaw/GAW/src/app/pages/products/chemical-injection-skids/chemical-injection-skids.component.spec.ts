import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChemicalInjectionSkidsComponent } from './chemical-injection-skids.component';

describe('ChemicalInjectionSkidsComponent', () => {
  let component: ChemicalInjectionSkidsComponent;
  let fixture: ComponentFixture<ChemicalInjectionSkidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChemicalInjectionSkidsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChemicalInjectionSkidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
