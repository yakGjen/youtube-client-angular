import {EventEmitter, Injectable} from '@angular/core';

import { response } from '../response';
import {SearchItemModel} from '../models/search-item.model';

@Injectable({
  providedIn: 'root'
})

export class GetVideosService {

  /* constructor() { } */
  public getInputValueEvent: EventEmitter<string> = new EventEmitter();

  public getItems(): SearchItemModel[] {
    return response.items;
  }
}
