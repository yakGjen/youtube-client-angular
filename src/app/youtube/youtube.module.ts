import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SearchResultsComponent} from './pages/search-results/search-results.component';
import {SearchItemComponent} from './components/search-item/search-item.component';
import {RouterModule, Routes} from '@angular/router';
import { DetailedItemComponent } from './pages/detailed-item/detailed-item.component';

const routes: Routes = [
  {path: '', component: SearchResultsComponent}
];

@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchItemComponent,
    DetailedItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    SearchResultsComponent,
    SearchItemComponent
  ]
})
export class YoutubeModule { }
