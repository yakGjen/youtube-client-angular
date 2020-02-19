import { Injectable } from '@angular/core';

import { response } from '../response';
import {SearchItemModel} from '../models/search-item.model';

@Injectable({
  providedIn: 'root'
})

export class GetVideosService {

  /* constructor() { } */
  public getItems(): SearchItemModel[] {
    return response.items;
  }
}
