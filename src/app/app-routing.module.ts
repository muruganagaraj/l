import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/Home/Login/Login.component';
import { RouteConstants } from '../shared/constants/route.constants';

const routes: Routes = [
  { path: '', component: LoginComponent },

    { path: RouteConstants.board, loadChildren: './board/board.module#BoardModule' },

    { path: RouteConstants.file, loadChildren: './file/file.module#FileModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})

export class AppRoutingModule { }
