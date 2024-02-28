import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]',
})
export class ColorDirective {
  @HostListener('window:keydown', ['$event']) private test(e: KeyboardEvent) {
    switch (e.key) {
      case 'ArrowRight': {
        this.el.nativeElement.style.color = 'red';
        break;
      }
      case 'ArrowLeft': {
        this.el.nativeElement.style.color = 'green';
        break;
      }
      case 'ArrowUp': {
        this.el.nativeElement.style.color = 'purple';
        break;
      }
      case 'ArrowDown': {
        this.el.nativeElement.style.color = 'blue';
        break;
      }
      default: {
        this.el.nativeElement.style.color = 'black';
        break;
      }
    }
  }

  constructor(private el: ElementRef<HTMLLIElement>) {}
}
