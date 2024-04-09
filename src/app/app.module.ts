import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './core-modules/app/components/container/app.component';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { HeaderComponent } from './core-modules/app/components/views/header/header.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '@core/services/in-memory-api/in-memory-data.service';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { GalleryComponent } from '@core/components/gallery/gallery.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    GalleryComponent,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  providers: [
    provideHttpClient(withFetch()),
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
