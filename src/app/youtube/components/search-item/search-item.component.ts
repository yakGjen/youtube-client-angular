import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SearchItemModel} from '../../../shared/models/search-item.model';
import {ActivatedRoute, Router} from '@angular/router';

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

  public id: string = 'YN8zNnV0sK8';
  // tslint:disable-next-line
  @Output() public showCard: EventEmitter<any> = new EventEmitter();

  constructor(private activateRoute: ActivatedRoute, private route: Router) { }

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

  public onHandleShowItemInfo(): void {
    // this.route.navigate(['youtube', this.responseItem.id]);
    // tslint:disable-next-line
    // console.log('idbla:', this.activateRoute.snapshot.params.id);
    let ab: string;
    // tslint:disable-next-line
    this.activateRoute.params.subscribe(params => {
      // tslint:disable-next-line
      ab = params['id'];
    });
    // this.activateRoute.params.subscribe(params => this.id = params['id'])
    this.showCard.emit({isShow: true});
  }

}
