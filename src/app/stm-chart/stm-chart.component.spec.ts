import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StmChartComponent } from './stm-chart.component';

describe('StmChartComponent', () => {
  let component: StmChartComponent;
  let fixture: ComponentFixture<StmChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StmChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StmChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
