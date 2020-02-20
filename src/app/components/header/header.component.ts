import {Component} from '@angular/core';
import {GetVideosService} from '../../services/get-videos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public inputValue: string;
  public showFiltering: boolean = false;

  constructor(private sendInputValue: GetVideosService) { }

  public onShowFiltering(): void {
    this.showFiltering = !this.showFiltering;
  }

  public sendResponse(event: Event): void {
    event.preventDefault();

    const request: string = this.inputValue;
    this.inputValue = '';

    if (this.inputValue === undefined) {
      console.log('ok');
      return;
    }
    this.sendInputValue.getInputValueEvent.emit(request);
    // console.log(request);
  }
}
