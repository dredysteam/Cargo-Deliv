import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockPalletsComponent } from './stock-pallets.component';

describe('StockPalletsComponent', () => {
  let component: StockPalletsComponent;
  let fixture: ComponentFixture<StockPalletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockPalletsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockPalletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
