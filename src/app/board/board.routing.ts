import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashBoardComponent } from './dashBoard/dashBoard.component';
import { LayoutComponent } from './layout/layout.component';
const appRoutes: Routes = [
    {
        path: '', component: DashBoardComponent
  },
  {
    path: 'layout', component: LayoutComponent
  }
];

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})

export class BoardRoutingModule { }
