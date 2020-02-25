import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SearchResultsComponent} from './pages/search-results/search-results.component';
import {SearchItemComponent} from './components/search-item/search-item.component';

@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchResultsComponent
  ]
})
export class YoutubeModule { }
