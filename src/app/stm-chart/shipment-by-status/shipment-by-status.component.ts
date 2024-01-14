import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InnerContentComponent } from '../../inner-content/inner-content.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-shipment-by-status',
  templateUrl: './shipment-by-status.component.html',
  styleUrls: ['./shipment-by-status.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    InnerContentComponent,
    CommonModule,
    FormsModule,
  ],
})
export class ShipmentByStatusComponent {
  textLabel: string = 'demo text';
}
