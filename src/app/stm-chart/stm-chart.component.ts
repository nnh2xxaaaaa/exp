import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
const nzModules = [
  NzBreadCrumbModule,
  NzIconModule,
  NzLayoutModule,
  NzMenuModule,
  NzSpinModule
];

@Component({
  standalone: true,
  selector: 'app-stm-chart',
  templateUrl: './stm-chart.component.html',
  styleUrls: ['./stm-chart.component.scss'],
  imports: [
    ...nzModules,
    RouterLink, 
  ],
})
export class StmChartComponent {
  @Input() isCollapsed: boolean = false;
}
