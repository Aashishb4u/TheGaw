import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubseaBoltTensionerComponent } from './subsea-bolt-tensioner.component';

describe('SubseaBoltTensionerComponent', () => {
  let component: SubseaBoltTensionerComponent;
  let fixture: ComponentFixture<SubseaBoltTensionerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubseaBoltTensionerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubseaBoltTensionerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
