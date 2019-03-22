import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class CanActivateRouteGuard implements CanActivate {
    constructor(
    ) { }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        return true;
    }
}
