import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path:"",
      children:[
        {
          path: 'shipment-by-status',
          loadChildren: () =>
            import('./shipment-by-status/shipment-by-status.component').then(
              (m) => m.ShipmentByStatusComponent
            ),
        },
        {
          path: 'shipment-by-total',
          loadChildren: () =>
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
  