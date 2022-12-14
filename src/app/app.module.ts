import { APP_BASE_HREF } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SharedModule } from './shared/shared.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const BASIC_MODULES = [
  FormsModule,
  ReactiveFormsModule,
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
];

@NgModule({
  declarations: [AppComponent, HomeComponent, FooterComponent],
  imports: [
    BASIC_MODULES,
    SharedModule,
    CoreModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      defaultLanguage: 'es',
    }),
  ],
  exports: [BASIC_MODULES],
  providers: [
    { provide: LOCALE_ID, useValue: 'es' },
    { provide: APP_BASE_HREF, useValue: '/kooditec' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
