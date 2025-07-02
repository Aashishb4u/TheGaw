import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringReturnBoltTensionerComponent } from './spring-return-bolt-tensioner.component';

describe('SpringReturnBoltTensionerComponent', () => {
  let component: SpringReturnBoltTensionerComponent;
  let fixture: ComponentFixture<SpringReturnBoltTensionerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpringReturnBoltTensionerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpringReturnBoltTensionerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
