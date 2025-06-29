import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LvInstallationComponent } from './lv-installation.component';

describe('LvInstallationComponent', () => {
  let component: LvInstallationComponent;
  let fixture: ComponentFixture<LvInstallationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LvInstallationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LvInstallationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
