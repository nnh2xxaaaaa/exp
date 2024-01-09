import {Component, Input} from '@angular/core';
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {InnerContentComponent} from "../inner-content/inner-content.component";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {ListUlLiComponent} from "../list-ul-li/list-ul-li.component";

const nzModules = [
  NzBreadCrumbModule,
  NzIconModule,
  NzLayoutModule,
  NzMenuModule,
]

@Component({
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  imports: [
    ...nzModules,
    InnerContentComponent,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    ListUlLiComponent,
  ],
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  @Input() text : string = '' ;
  isCollapsed = false;


}
