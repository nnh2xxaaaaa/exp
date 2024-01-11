import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentByStatusComponent } from './shipment-by-status.component';

describe('ShipmentByStatusComponent', () => {
  let component: ShipmentByStatusComponent;
  let fixture: ComponentFixture<ShipmentByStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipmentByStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipmentByStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
