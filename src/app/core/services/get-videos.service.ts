import {EventEmitter, Injectable} from '@angular/core';

import { response } from '../../response';
import {SearchItemModel} from '../../shared/models/search-item.model';

@Injectable({
  providedIn: 'root'
})

export class GetVideosService {
  public getInputValueEvent: EventEmitter<string> = new EventEmitter();

  public firstEnter: boolean = true;

  public checkEnter(): void {
    console.log('enter', this.firstEnter);
  }

  public getItems(): SearchItemModel[] {
    console.log('get response');
    return response.items;
  }

  public getItem(id: string): SearchItemModel {
    const items: SearchItemModel[] = response.items;
    let returnItem: SearchItemModel;

    items.forEach((item) => {
      if (item.id === id) {
        returnItem =  item;
      }
    });
    return returnItem;
  }
}
