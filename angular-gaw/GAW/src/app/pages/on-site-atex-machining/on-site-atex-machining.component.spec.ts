import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnSiteAtexMachiningComponent } from './on-site-atex-machining.component';

describe('OnSiteAtexMachiningComponent', () => {
  let component: OnSiteAtexMachiningComponent;
  let fixture: ComponentFixture<OnSiteAtexMachiningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OnSiteAtexMachiningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnSiteAtexMachiningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
