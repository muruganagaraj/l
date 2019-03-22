/*tslint:disable no-any */
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { Router } from '@angular/router';
import { Constants } from '../constants/constants';
import { RouteConstants } from '../constants/route.constants';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    constructor(
        private router: Router
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = this.setHeaders(request);
        return next.handle(request).do((event: HttpEvent<any>) => {
        }, (rejection: any) => {
            this.showErrorMessage(rejection);
        });
    }

    private setHeaders(request: HttpRequest<any>): HttpRequest<any> {
        request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        return request;
    }

    private showErrorMessage(errorMessage: any): void {
        alert(errorMessage);
    }
}
