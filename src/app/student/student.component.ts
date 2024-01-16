import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { StudentTableComponent } from "./student-table/student-table.component";

@Component({
  selector: 'app-student',
  standalone: true,
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
  imports: [
    RouterLink,
    CommonModule,
    RouterLinkActive,
    FormsModule,
    StudentTableComponent
  ]
})
export class StudentComponent {

}
