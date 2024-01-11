import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentByTotalComponent } from './shipment-by-total.component';

describe('ShipmentByTotalComponent', () => {
  let component: ShipmentByTotalComponent;
  let fixture: ComponentFixture<ShipmentByTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentByTotalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipmentByTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
