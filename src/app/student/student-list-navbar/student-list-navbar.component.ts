import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzSpinModule } from 'ng-zorro-antd/spin';
const nzModules = [
  NzBreadCrumbModule,
  NzIconModule,
  NzLayoutModule,
  NzMenuModule,
  NzSpinModule
];

@Component({
  selector: 'app-student-list-navbar',
  standalone: true,
  templateUrl: './student-list-navbar.component.html',
  styleUrls: ['./student-list-navbar.component.scss'],
  imports: [...nzModules, RouterLink, RouterLinkActive, CommonModule],
})
export class StudentListNavbarComponent {

}
