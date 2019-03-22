import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';

import { AppRoutingModule } from './app-routing.module';
import { ConfigurationModule } from '../configuration/configuration.module';
import { AttorneyApiModule } from '../webservices/attorney.services';
import { AppComponent } from './app.component';

import { MastersService } from '../shared/services/master.service';
import { TextPairHelperService } from '../shared/services/text-pair-helper.service';
import { IdleTimeoutService } from '../shared/security/idle-timeout.service';
import { StorageHelper } from '../shared/providers/storage/storageHelper';

import { PhoneNumberPipe } from '../shared/pipes/phone-number.pipe';
import { AllowOnlyDirective } from '../shared/directives/allow-only.directive';

import { AppInterceptor } from '../shared/interceptors/app.interceptor';
import { CanActivateRouteGuard } from '../shared/providers/route-guards/can-activate-route-guard.provider';

import { HeaderComponent } from '../shared/component/header/header.component';
import { FooterComponent } from '../shared/component/footer/footer.component';

import { LoginComponent } from '../app/Home/Login/Login.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    PhoneNumberPipe,
    AllowOnlyDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ConfigurationModule,
    HttpClientModule,
    AttorneyApiModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgIdleKeepaliveModule.forRoot()
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
  }, MastersService, StorageHelper, CanActivateRouteGuard, IdleTimeoutService, TextPairHelperService],
  exports: [HeaderComponent, FooterComponent, AllowOnlyDirective],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
