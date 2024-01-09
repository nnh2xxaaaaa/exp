import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUlLiComponent } from './list-ul-li.component';

describe('ListUlLiComponent', () => {
  let component: ListUlLiComponent;
  let fixture: ComponentFixture<ListUlLiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUlLiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListUlLiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
