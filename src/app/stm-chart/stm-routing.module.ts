import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: 'shipment-by-status',
        loadComponent: () =>
          import('./shipment-by-status/shipment-by-status.component').then(
            (c) => c.ShipmentByStatusComponent
          ),
      },
      {
        path: 'shipment-by-total',
        loadComponent: () =>
          import('./shipment-by-total/shipment-by-total.component').then(
            (m) => m.ShipmentByTotalComponent
          ),
      },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StmRoutingRoutingModule { }
