import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as fromServices from './services';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import * as fromComponents from './components';
import * as fromContainers from './containers';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CountryModalComponent } from './components';

@NgModule({
  declarations: [
    AppComponent,
    ...fromComponents.components,
    ...fromContainers.containers
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [...fromServices.services],
  bootstrap: [AppComponent],
  entryComponents: [CountryModalComponent]
})
export class AppModule {}
