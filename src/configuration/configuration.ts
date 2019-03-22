import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ExternalUrl } from './externalurl.configuration';
import { environment } from '../environments/environment';

@Injectable()
export class Configuration {
    public ApiServer: string = environment.API_URL;
    public appVersion?: string;
    public uiBaseUrl?: string;
    public externalUrls?: ExternalUrl;
    public sessionTimeOutInMinutes?: number = 20;
    public sessionTimeOutWarningInMinutes?: number = 2;
    constructor(private http: HttpClient) {
        this.externalUrls = new ExternalUrl();
        // tslint:disable-next-line:no-any
        this.getJSON().subscribe((settings: any): any => {
            // this.appVersion = settings.appVersion;
            this.uiBaseUrl = settings.uiBaseUrl;
            this.sessionTimeOutInMinutes = settings.sessionTimeOutInMinutes;
            this.sessionTimeOutWarningInMinutes = settings.sessionTimeOutWarningInMinutes;
            this.setExternalUrls(settings);
        });
    }

    // tslint:disable-next-line:no-any
    private getJSON(): Observable<any> {
        return this.http.get('./assets/config/app-settings.json');
    }
    // tslint:disable-next-line:no-any
    private setExternalUrls(settings: any): void {
        this.externalUrls.facebook = settings.externalUrls.customerServiceCenter;
    }
}
