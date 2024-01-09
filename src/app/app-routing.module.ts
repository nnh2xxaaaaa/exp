import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShipmentByStatusComponent} from "./chart-demo/shipment-by-status/shipment-by-status.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: 'dashboard', pathMatch: 'full', loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent) },
  { path: 'dashboard/chart/shipment-by-status', pathMatch: 'full', loadComponent: () => import('./chart-demo/shipment-by-status/shipment-by-status.component').then(m => m.ShipmentByStatusComponent) ,outlet: 'shipment-by-status'},
  { path: 'dashboard/chart/shipment-by-total', pathMatch: 'full', loadComponent: () => import('./chart-demo/shipment-by-total/shipment-by-total.component').then(m => m.ShipmentByTotalComponent),outlet: 'shipment-by-total' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
