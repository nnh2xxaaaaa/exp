import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { FormsModule } from '@angular/forms';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ...nzModules,
    RouterLink, 
    CommonModule,
    RouterLinkActive,
    FormsModule
  ],
})
export class StmChartComponent {
  isCollapsed: boolean = true;
}
