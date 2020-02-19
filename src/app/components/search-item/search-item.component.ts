import {Component, Input, OnInit} from '@angular/core';
import {SearchItemModel} from '../../models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent implements OnInit {

  @Input() public responseItem: SearchItemModel;

  public img: string;

  public channelTitle: string;
  public viewCount: string;
  public likeCount: string;
  public dislikeCount: string;
  public favoriteCount: string;

  constructor() { }

  public ngOnInit(): void {
    this.img = this.responseItem.snippet.thumbnails.medium.url;
    this.channelTitle = this.responseItem.snippet.channelTitle;
    this.viewCount = this.responseItem.statistics.viewCount;
    this.likeCount = this.responseItem.statistics.likeCount;
    this.dislikeCount = this.responseItem.statistics.dislikeCount;
    this.favoriteCount = this.responseItem.statistics.favoriteCount;
  }

}
