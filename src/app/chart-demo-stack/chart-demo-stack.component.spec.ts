import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartDemoStackComponent } from './chart-demo-stack.component';

describe('ChartDemoStackComponent', () => {
  let component: ChartDemoStackComponent;
  let fixture: ComponentFixture<ChartDemoStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartDemoStackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartDemoStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
