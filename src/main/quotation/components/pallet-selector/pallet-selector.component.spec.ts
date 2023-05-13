import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalletSelectorComponent } from './pallet-selector.component';

describe('PalletSelectorComponent', () => {
  let component: PalletSelectorComponent;
  let fixture: ComponentFixture<PalletSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalletSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalletSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
