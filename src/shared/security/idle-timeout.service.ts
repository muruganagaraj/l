import { Injectable, } from '@angular/core';
import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { ToastrService } from 'ngx-toastr';
import { Configuration } from '../../configuration/configuration';
import { Constants } from '../../shared/constants/constants';

@Injectable()
export class IdleTimeoutService {
    private timeonTimeoutWarningShown: boolean = false;
    constructor(
        private idle: Idle,
        private keepalive: Keepalive,
        private toastr: ToastrService,
        private config: Configuration
    ) {
        // sets an idle timeout of 5 seconds, for testing purposes.
        this.idle.setIdle((this.config.sessionTimeOutInMinutes - this.config.sessionTimeOutWarningInMinutes) * 60);
        // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
        this.idle.setTimeout(this.config.sessionTimeOutWarningInMinutes * 60);
        // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
        this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
        // sets the ping interval to 15 seconds
        this.keepalive.interval(15);

        this.idle.onTimeoutWarning.subscribe((countdown: number) => {
            if (!this.timeonTimeoutWarningShown) {
                this.timeonTimeoutWarningShown = true;
                this.toastr.warning(Constants.sessionTimeoutWarningMessage.replace('#TimeoutWarningInMinutes#',
                    this.config.sessionTimeOutWarningInMinutes.toString()));
            }
        });

        this.idle.onTimeout.subscribe(() => {
            alert('time out, bye bye');
        });
        this.stop();
    }

    public start(): void {
        this.idle.watch();
        this.timeonTimeoutWarningShown = false;
    }

    public stop(): void {
        this.idle.stop();
        this.timeonTimeoutWarningShown = false;
    }
}
