import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DashboardComponent} from "../../dashboard/dashboard.component";

@Component({
  standalone: true,
  selector: 'app-shipment-by-total',
  templateUrl: './shipment-by-total.component.html',
  styleUrls: ['./shipment-by-total.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ShipmentByTotalComponent {
  textlabel : string = "Chart of total"
}
