import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { Spinner2Component } from './components/spinner2/spinner2.component';
import { Spinner3Component } from './components/spinner3/spinner3.component';
import { Spinner4Component } from './components/spinner4/spinner4.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '../../assets/i18n/', '.json');
}

@NgModule({
  declarations: [SpinnerComponent, Spinner2Component, Spinner3Component, Spinner4Component],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [SpinnerComponent, Spinner2Component, Spinner3Component, Spinner4Component],
})
export class SharedLocalModule {}
