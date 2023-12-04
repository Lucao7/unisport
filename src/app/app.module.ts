import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthInterceptorProvider } from './_interceptors/auth.interceptor';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ToastrModule } from 'ngx-toastr';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { LoadingInterceptorProvider } from './_interceptors/loading/loading.interceptor';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      closeButton: true,
      progressBar: true
    })
  ],
  providers: [ LoadingInterceptorProvider, AuthInterceptorProvider ],
  bootstrap: [AppComponent]
})
export class AppModule { }
