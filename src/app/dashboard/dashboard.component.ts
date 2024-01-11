import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { InnerContentComponent } from '../inner-content/inner-content.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { StmChartComponent } from '../stm-chart/stm-chart.component';
import {NzSpinModule} from 'ng-zorro-antd/spin';

const nzModules = [
  NzBreadCrumbModule,
  NzIconModule,
  NzLayoutModule,
  NzMenuModule,
];

@Component({
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ...nzModules,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    StmChartComponent,
  ],
})
export class DashboardComponent {
  @Input() text: string = '';
  isCollapsed = false;
}
