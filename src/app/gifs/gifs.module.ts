import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';

@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    SearchResultsComponent,
  ],
  exports: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage
  ]
})
export class GifsModule { }
