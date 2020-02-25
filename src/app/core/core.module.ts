import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './pages/header/header.component';
import { FilteringComponent } from './pages/filtering/filtering.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FilteringComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class CoreModule { }
