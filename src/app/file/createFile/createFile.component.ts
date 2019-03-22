import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'attoney-first-createfile',
    templateUrl: './createFile.component.html'
})
export class CreateFileComponent implements OnInit {
    constructor(private router: Router) {

    }
    ngOnInit(): void {
        alert('create file component');
    }

     onDashboardClick(): void {
        this.router.navigate(['board']);
    }
}
