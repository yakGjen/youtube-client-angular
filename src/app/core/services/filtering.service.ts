import {EventEmitter, Injectable} from '@angular/core';
import {SearchItemModel} from '../../shared/models/search-item.model';

@Injectable({
  providedIn: 'root'
})
export class FilteringService {
  public getFilteringCriterion: EventEmitter<string | object> = new EventEmitter();
  /* tslint:disable */
  public filtering(arr: SearchItemModel[], criterion: string): SearchItemModel[] {
    const newArr: SearchItemModel[] = [...arr];

    if (criterion === 'date-filter') {
      newArr.sort((a, b) => {
        const aa: any = new Date(a.snippet.publishedAt);
        const bb: any = new Date(b.snippet.publishedAt);
        return bb - aa;
      });
    }

    if(criterion === 'view-filter') {
      newArr.sort((a, b) => {
        const aa = +a.statistics.viewCount;
        const bb = +b.statistics.viewCount;
        return bb - aa;
      });
    }

    return newArr;
  }
  /* tslint:enable */

  public filteringByWord(arr: SearchItemModel[], word: string): SearchItemModel[] {
    const newArr: SearchItemModel[] = arr.filter((item) => {
      if ( item.snippet.title.toLocaleLowerCase().includes(word.toLocaleLowerCase()) ) {
        return true;
      }
      return false;
    });

    return newArr;
  }

  /*private sortingOnDate(a, b) {
    const aa: any = new Date(a.snippet.publishedAt);
    const bb: any = new Date(b.snippet.publishedAt);
    return bb - aa;
  }*/
}
