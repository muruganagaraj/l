import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Configuration } from './configuration';
import { ExternalUrl } from './externalurl.configuration';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        Configuration, ExternalUrl
    ]
})

export class ConfigurationModule {
}
