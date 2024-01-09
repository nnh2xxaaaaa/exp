import { Component } from '@angular/core';
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzIconModule} from "ng-zorro-antd/icon";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-list-ul-li',
  templateUrl: './list-ul-li.component.html',
  imports: [
    NzMenuModule,
    NzIconModule,
    RouterLink,
    RouterLinkActive
  ],
  styleUrls: ['./list-ul-li.component.scss']
})
export class ListUlLiComponent {

}
