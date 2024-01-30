import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCheckbox2Component } from './custom-checkbox2.component';

describe('CustomCheckbox2Component', () => {
  let component: CustomCheckbox2Component;
  let fixture: ComponentFixture<CustomCheckbox2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomCheckbox2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomCheckbox2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
