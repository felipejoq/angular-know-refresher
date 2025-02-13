import {NgModule} from '@angular/core';
import {provideHttpClient} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';

import {GifsModule} from './gifs/gifs.module';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    GifsModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideHttpClient(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
