import { Component } from '@angular/core';
import {InnerContentComponent} from "../../inner-content/inner-content.component";
import {DashboardComponent} from "../../dashboard/dashboard.component";

@Component({
  standalone: true,
  selector: 'app-shipment-by-status',
  templateUrl: './shipment-by-status.component.html',
  styleUrls: ['./shipment-by-status.component.scss'],
  imports: [
    InnerContentComponent,
    DashboardComponent
  ],
})
export class ShipmentByStatusComponent {
      textLabel:string = "demo text";
}
