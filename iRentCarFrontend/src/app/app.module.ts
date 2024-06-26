import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { DarkModeToggleComponent } from './elements/dark-mode-toggle/dark-mode-toggle.component';
import { ScreenShotComponent } from './objects/screen-shot/screen-shot.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfilBarComponent } from './components/profil-bar/profil-bar.component';

import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    DarkModeToggleComponent,
    ScreenShotComponent,
    FooterComponent,
    ProfilBarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
