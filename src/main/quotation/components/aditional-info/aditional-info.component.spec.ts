import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AditionalInfoComponent } from './aditional-info.component';

describe('AditionalInfoComponent', () => {
  let component: AditionalInfoComponent;
  let fixture: ComponentFixture<AditionalInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AditionalInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AditionalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
