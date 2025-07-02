import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactSocketsComponent } from './impact-sockets.component';

describe('ImpactSocketsComponent', () => {
  let component: ImpactSocketsComponent;
  let fixture: ComponentFixture<ImpactSocketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImpactSocketsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpactSocketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
