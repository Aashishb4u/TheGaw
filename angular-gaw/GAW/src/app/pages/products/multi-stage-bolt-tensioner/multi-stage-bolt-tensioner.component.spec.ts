import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiStageBoltTensionerComponent } from './multi-stage-bolt-tensioner.component';

describe('MultiStageBoltTensionerComponent', () => {
  let component: MultiStageBoltTensionerComponent;
  let fixture: ComponentFixture<MultiStageBoltTensionerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultiStageBoltTensionerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiStageBoltTensionerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
