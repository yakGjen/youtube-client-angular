import { Component, OnInit } from '@angular/core';

import { GetVideosService } from '../../services/get-videos.service';
import {SearchItemModel} from '../../models/search-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  public items: SearchItemModel[];

  constructor(private response: GetVideosService) { }

  public ngOnInit(): void {
    const responseItems: SearchItemModel[] = this.response.getItems();
    this.items = responseItems;
  }

}
