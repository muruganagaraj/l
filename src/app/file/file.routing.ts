import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { CreateFileComponent } from './createFile/createFile.component';
import { CanActivateRouteGuard } from '../../shared/providers/route-guards/can-activate-route-guard.provider';
import { RouteConstants } from '../../shared/constants/route.constants';
const appRoutes: Routes = [
    {
        path: '', component: CreateFileComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(appRoutes)],
    exports: [RouterModule]
})

export class FileRoutingModule { }
