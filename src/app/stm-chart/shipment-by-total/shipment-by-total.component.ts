import {ChangeDetectionStrategy, Component} from '@angular/core';
import {DashboardComponent} from "../../dashboard/dashboard.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { InnerContentComponent } from 'src/app/inner-content/inner-content.component';

@Component({
  standalone: true,
  selector: 'app-shipment-by-total',
  templateUrl: './shipment-by-total.component.html',
  styleUrls: ['./shipment-by-total.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    InnerContentComponent,
    CommonModule,
    FormsModule,
  ],

})
export class ShipmentByTotalComponent {
  textlabel : string = "Chart of total"
}
