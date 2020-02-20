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
  public commentCount: string;

  public borderColor: string;

  public templateUrlVideo: string = 'https://www.youtube.com/watch?v=';
  public srcVideo: string;

  constructor() { }

  private setBorder(date: string): void {
    const periodMilliseconds: {
      week: number;
      month: number;
    } = {
      week: 31536000000,
      month: 2592000000.0000005,
    };

    const publishedAt: number = new Date(date).getTime();
    const nowDate: number = new Date().getTime();

    if (nowDate - publishedAt <= periodMilliseconds.week) {
      this.borderColor = 'blue';
    } else if (nowDate - publishedAt <= periodMilliseconds.month) {
      this.borderColor = 'green';
    } else {
      this.borderColor = 'red';
    }
  }

  public ngOnInit(): void {
    this.img = this.responseItem.snippet.thumbnails.medium.url;
    this.channelTitle = this.responseItem.snippet.channelTitle;
    this.viewCount = this.responseItem.statistics.viewCount;
    this.likeCount = this.responseItem.statistics.likeCount;
    this.dislikeCount = this.responseItem.statistics.dislikeCount;
    this.commentCount = this.responseItem.statistics.commentCount;
    // console.log(new Date(this.responseItem.snippet.publishedAt));
    this.setBorder(this.responseItem.snippet.publishedAt);
    this.srcVideo = this.templateUrlVideo + this.responseItem.id;
  }

}
