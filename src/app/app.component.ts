import { Component } from '@angular/core';
import { IdleTimeoutService } from '../shared/security/idle-timeout.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'attorneyFirst';
  constructor(private idleTimeoutService: IdleTimeoutService) {
    this.idleTimeoutService.start();
  }

}
