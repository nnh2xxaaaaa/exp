import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [

  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'stm',
        loadChildren: () =>
          import('./stm-chart/stm-routing.module').then((m) => m.StmRoutingRoutingModule),
      },

      {
        path: 'student',
        loadChildren: () =>
          import('./student/student-routing.module').then((m) => m.StudentRoutingModule),
      },
    ],


  },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
