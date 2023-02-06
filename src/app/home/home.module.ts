import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CardHostingDisplayComponent } from './card-hosting/card-hosting-display.component';
import { CardHostingComponent } from './card-hosting/card-hosting.component';
import { CardComponent } from './card-hosting/card.component';
import { HomeComponent } from './home.component';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library as legacyLibrary } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faBell as farBell, far, faUser } from '@fortawesome/free-regular-svg-icons';
import {
  faBell as fasBell,
  faCoffee,
  faFilm,
  faFish,
  faLock,
  fas,
} from '@fortawesome/free-solid-svg-icons';
import { OopsLib001Module } from 'oops-lib001';
import { OopsLib002Module, SharedModule } from 'oops-lib002';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedLocalModule } from '../shared/shared.local.module';

const routes: Routes = [
  { path: 'home/home', component: HomeComponent },
  { path: 'home/card-host', component: CardHostingDisplayComponent },
];

@NgModule({
  declarations: [HomeComponent, CardHostingComponent, CardComponent, CardHostingDisplayComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    OopsLib001Module,
    OopsLib002Module,
    SharedModule,
    SharedLocalModule,
    TranslateModule.forRoot(),
    RouterModule.forChild(routes),
  ],
  exports: [
    OopsLib001Module,
    OopsLib002Module,
    SharedModule,
    SharedLocalModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
})
export class HomeModule {
  constructor(library: FaIconLibrary) {
    // The only disadvantage of this approach is the project bundle size will increase.So it is better to add the necessary icons to the library instead of adding all icons.
    // library.addIconPacks(fas, fab, far); // If you want to use all available icons, add all icon styles to font awesome icon library using addIconPacks() method.

    library.addIcons(faFilm, faFish, faCoffee, faUser, faLock, farBell, fasBell);

    // library.addIcons(faFilm, faFish, farBell, fasBell);
    library.addIconPacks(fas, far, fab);
    // library.addIconPacks(fab);

    //legacy old library way
    legacyLibrary.add(faFilm, faFish, farBell, fasBell);
    //legacyLibrary.add(fas,far,fab);
  }
}
