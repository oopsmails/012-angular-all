import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { OopsLib001Module } from 'oops-lib001';
import { OopsLib002Module, SharedModule } from 'oops-lib002';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleModule } from './example/example.model';
import { HomeModule } from './home/home.module';
import { SandboxModule } from './sandbox/sandbox.model';
import { StorePocModule } from './store-poc/store.poc.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    OopsLib001Module,
    OopsLib002Module,
    SharedModule,
    HomeModule,
    ExampleModule,
    SandboxModule,
    StorePocModule, // has to before AppRoutingModule
    AppRoutingModule,
  ],
  exports: [],
  bootstrap: [AppComponent],
  providers: [TranslateService],
})
export class AppModule {}
