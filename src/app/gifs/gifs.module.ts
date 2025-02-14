import { NgModule } from '@angular/core';

import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { ShowCardComponent } from './components/show-card/show-card.component';

@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    SearchResultsComponent,
    ShowCardComponent,
  ],
  exports: [
    HomePageComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
  ]
})
export class GifsModule { }
