import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentListNavbarComponent } from './student-list-navbar.component';

describe('StudentListNavbarComponent', () => {
  let component: StudentListNavbarComponent;
  let fixture: ComponentFixture<StudentListNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentListNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentListNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
