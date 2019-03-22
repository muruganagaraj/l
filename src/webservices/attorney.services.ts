/* tslint:disable */
import { NgModule, Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ConfigurationModule } from '../configuration/configuration.module';
import { Configuration } from '../configuration/configuration';

@Injectable()
export class AttorneyService {
    constructor(private httpClient: HttpClient, private configuration: Configuration) {
    }
    public Get(request: any, url: string): Observable<any> {
        let resourceUrl: string = url;
        let queryParams: any = request;
        return this.httpClient.get<any>(buildServiceUrl(this.configuration.ApiServer, resourceUrl, queryParams));
    }

    public Post(request: any, url: string): Observable<any> {
        let resourceUrl: string = url;
        let queryParams: any = {
        };
        return this.httpClient.post<any>(buildServiceUrl(this.configuration.ApiServer, resourceUrl, queryParams), request);
    }
    public Put(request: any, url: string): Observable<any> {
        let resourceUrl: string = url;
        let queryParams: any = {
        };
        return this.httpClient.put<any>(buildServiceUrl(this.configuration.ApiServer, resourceUrl, queryParams), request);
    }
    public Delete(request: any, url: string): Observable<any> {
        let resourceUrl: string = url;
        let queryParams: any = request;
        return this.httpClient.delete<any>(buildServiceUrl(this.configuration.ApiServer, resourceUrl, queryParams));
    }
}

function buildServiceUrl(baseUrl: string, resourceUrl: string, queryParams?: any): string {
    let url: string = baseUrl;
    let baseUrlSlash: boolean = url[url.length - 1] === '/';
    let resourceUrlSlash: boolean = resourceUrl[0] === '/';
    if (!baseUrlSlash && !resourceUrlSlash) {
        url += '/';
    }
    else if (baseUrlSlash && resourceUrlSlash) {
        url = url.substr(0, url.length - 1);
    }
    url += resourceUrl;

    if (queryParams) {
        let isFirst: boolean = true;
        for (let p in queryParams) {
            if (queryParams.hasOwnProperty(p) && queryParams[p]) {
                let separator: string = isFirst ? '?' : '&';
                url += `${separator}${p}=${encodeURI(queryParams[p])}`;
                isFirst = false;
            }
        }
    }
    return url;
}

@NgModule({
    imports: [HttpClientModule, ConfigurationModule],
    providers: [AttorneyService
    ]
}
)
export class AttorneyApiModule {
}