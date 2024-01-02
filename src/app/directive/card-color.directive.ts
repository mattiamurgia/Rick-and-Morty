import { AfterViewInit, Directive, ElementRef, inject, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCardColor]',
})
export class CardColorDirective implements AfterViewInit {
  @Input('appCardColor') idCard!: number;
  el = inject(ElementRef);
  renderer = inject(Renderer2);

  ngAfterViewInit(): void {
    // this.renderer.setStyle( this.el.nativeElement, 'background-color', this.idCard % 2 === 0 ? '#a2d2ff' : '#fb8500' );
    this.el.nativeElement.style.backgroundColor = this.idCard % 2 === 0 ? '#a2d2ff' : '#fb8500';
  }
}
