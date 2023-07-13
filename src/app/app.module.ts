import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './featureModule/user/pages/homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './sharedModule/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

