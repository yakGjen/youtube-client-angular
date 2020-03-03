import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appVideoPeriod]'
})
export class VideoPeriodDirective implements OnInit {

  private weekMilliseconds: number = 604800000;

  @Input() public publishedAt: string;

  constructor(
    private element: ElementRef,
    private renderer2: Renderer2
  ) {}

  public ngOnInit(): void {
    const videoDate: number = new Date(this.publishedAt).getTime();
    const nowDate: number = new Date().getTime();

    const monthPeriod: number = Math.abs(new Date().getMonth() - new Date(this.publishedAt).getMonth());
    /*
    published less than week
     */
    if (nowDate - videoDate <= this.weekMilliseconds) {
      this.renderer2.setStyle(this.element.nativeElement, 'border-bottom', `solid 5px blue`);
      return;
    }
    /*
    published less than month
     */
    if (monthPeriod === 1 && new Date().getDate() <= new Date(this.publishedAt).getDate()) {
      this.renderer2.setStyle(this.element.nativeElement, 'border-bottom', `solid 5px green`);
      return;
    }
    /*
    published more than month
     */
    this.renderer2.setStyle(this.element.nativeElement, 'border-bottom', `solid 5px red`);
  }

}
