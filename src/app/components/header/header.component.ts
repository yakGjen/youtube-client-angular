import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  // constructor() { }

  public inputValue: string;
  public showFiltering: boolean = false;

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
    console.log(request);
  }
}
