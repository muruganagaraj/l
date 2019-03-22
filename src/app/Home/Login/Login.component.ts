import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RouteConstants } from '../../../shared/constants/route.constants';

@Component({
    selector: 'attorney-first-login',
    templateUrl: './Login.component.html',
    styleUrls: ['./Login.component.scss']
})
export class LoginComponent implements OnInit {
    constructor(private router: Router) {

    }
    ngOnInit(): void {
        this.router.navigate([RouteConstants.board]);
    }
    onDashboardClick(): void {
        // this.router.navigate([RouteConstants.board]);
    }
    onFileClick(): void {
        // this.router.navigate([RouteConstants.file]);
    }
}
