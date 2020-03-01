import {Component, OnInit} from '@angular/core';
import {GetVideosService} from '../../../core/services/get-videos.service';
import {SearchItemModel} from '../../../shared/models/search-item.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-detailed-item',
  templateUrl: './detailed-item.component.html',
  styleUrls: ['./detailed-item.component.scss']
})
export class DetailedItemComponent implements OnInit {

  public img: string;
  public channelTitle: string;
  public viewCount: string;
  public likeCount: string;
  public dislikeCount: string;
  public commentCount: string;
  public publishedAt: string;
  public description: string;

  constructor(
    private route: Router,
    private activateRoute: ActivatedRoute,
    private response: GetVideosService
  ) { }

  public ngOnInit(): void {
    // tslint:disable-next-line
    const itemId: string = this.activateRoute.snapshot.params['id'];
    const itemData: SearchItemModel = this.response.getItem(itemId);

    this.img = itemData.snippet.thumbnails.standard.url;
    this.channelTitle = itemData.snippet.channelTitle;
    this.viewCount = itemData.statistics.viewCount;
    this.likeCount = itemData.statistics.likeCount;
    this.dislikeCount = itemData.statistics.dislikeCount;
    this.commentCount = itemData.statistics.commentCount;
    this.publishedAt = itemData.snippet.publishedAt;
    this.description = itemData.snippet.description;
  }

  public backToResults(): void {
    this.route.navigate(['/youtube']);
  }

}
