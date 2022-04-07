import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AuthModule } from '@app/auth';
import { environment } from '@env/environment';
import { TranslateModule } from '@ngx-translate/core';
import { ApiPrefixInterceptor, ErrorHandlerInterceptor, RouteReusableStrategy, SharedModule } from '@shared';
import { LoaderComponent } from '@shared';
import { NgBusyModule } from 'ng-busy';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { MaterialModule } from './material.module';
import { ShellModule } from './shell/shell.module';

@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    HttpClientModule,
    RouterModule,
    TranslateModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    ShellModule,
    HomeModule,
    AuthModule,
    NgBusyModule.forRoot({
      minDuration: 1000,
      template: LoaderComponent,
      disableAnimation: true,
    }),
    AppRoutingModule, // must be imported as the last module as it contains the fallback route
  ],
  declarations: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefixInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlerInterceptor,
      multi: true,
    },
    {
      provide: RouteReuseStrategy,
      useClass: RouteReusableStrategy,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
