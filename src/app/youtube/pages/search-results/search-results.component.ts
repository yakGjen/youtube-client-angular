import {
  Component, ElementRef,
  OnDestroy,
  OnInit, Renderer2, ViewChild
} from '@angular/core';

import { GetVideosService } from '../../../core/services/get-videos.service';
import { SearchItemModel } from '../../../shared/models/search-item.model';
import { FilteringService } from '../../../core/services/filtering.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit, OnDestroy {

  public items: SearchItemModel[];

  @ViewChild('searchResults') public searchResults: ElementRef;

  constructor(
    private response: GetVideosService,
    private getFilteringCriterion: FilteringService,
    private renderer2: Renderer2
  ) { }

  public ngOnInit(): void {
    this.response.checkEnter();
    this.response.getInputValueEvent.subscribe((value) => {
      const responseItems: SearchItemModel[] = this.response.getItems();
      this.items = responseItems;
      this.response.firstEnter = false;
    });

    this.getFilteringCriterion.getFilteringCriterion.subscribe((criterion) => {
      if (typeof criterion === 'string') {
        this.items = this.getFilteringCriterion.filtering(this.items, criterion);
      }

      if (typeof criterion === 'object') {
        const responseItems: SearchItemModel[] = this.response.getItems();
        this.items = this.getFilteringCriterion.filteringByWord(responseItems, criterion.value);
      }
    });

    /*if (!this.response.firstEnter) {
      const newArr: SearchItemModel[] = this.response.getItems();
      this.items.length = 0;
      newArr.forEach((item) => this.items.push(item));
    }*/
  }

  public ngOnDestroy(): void {
    this.getFilteringCriterion.getFilteringCriterion.unsubscribe();
  }

  public hideItems(): void {
    this.renderer2.setStyle(this.searchResults.nativeElement, 'display', 'none');
  }

  public showItems(): void {
    this.renderer2.setStyle(this.searchResults.nativeElement, 'display', 'flex');
  }

}
