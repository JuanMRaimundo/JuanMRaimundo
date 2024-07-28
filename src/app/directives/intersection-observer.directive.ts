import {
  Directive,
  ElementRef,
  EventEmitter,
  Output,
  OnDestroy,
  AfterViewInit,
} from '@angular/core';

@Directive({
  selector: '[intersectionObserver]',
})
export class IntersectionObserverDirective implements AfterViewInit, OnDestroy {
  @Output() intersectionObserver: EventEmitter<IntersectionObserverEntry[]> =
    new EventEmitter();
  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.observer = new IntersectionObserver((entries) => {
      this.intersectionObserver.emit(entries);
    });
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
