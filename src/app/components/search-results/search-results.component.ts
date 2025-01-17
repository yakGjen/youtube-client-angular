import { Component, OnInit } from '@angular/core';

import { GetVideosService } from '../../services/get-videos.service';
import { SearchItemModel } from '../../models/search-item.model';
import { FilteringService } from '../../services/filtering.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  public showResults: boolean = false;
  public items: SearchItemModel[];

  constructor(
    private response: GetVideosService,
    private getFilteringCriterion: FilteringService
  ) { }

  public ngOnInit(): void {
    this.response.getInputValueEvent.subscribe((value) => {
      const responseItems: SearchItemModel[] = this.response.getItems();
      this.items = responseItems;
    });

    this.getFilteringCriterion.getFilteringCriterion.subscribe((criterion) => {
      if (typeof criterion === 'string') {
        this.items = this.getFilteringCriterion.filtering(this.items, criterion);
      }

      if (typeof criterion === 'object') {
        const responseItems: SearchItemModel[] = this.response.getItems();
        // this.items = this.getFilteringCriterion.filteringByWord(this.items, criterion.value);
        this.items = this.getFilteringCriterion.filteringByWord(responseItems, criterion.value);
      }
    });
  }

}
