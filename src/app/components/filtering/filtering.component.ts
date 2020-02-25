import { Component, OnInit } from '@angular/core';

import {FilteringService} from '../../services/filtering.service';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.scss']
})
export class FilteringComponent implements OnInit {

  constructor(private sendFilteringCriterion: FilteringService) { }

  public ngOnInit(): void {
  }

  // tslint:disable-next-line
  public onHandleFilteringCriterion(event): void {
    const criterion: string = event.target.id;
    this.sendFilteringCriterion.getFilteringCriterion.emit(criterion);
  }

  // tslint:disable-next-line
  public onHandleFilteringWord(event): void {
    const criterionWord: string = event.target.value;
    this.sendFilteringCriterion.getFilteringCriterion.emit({value: criterionWord});
}

}
