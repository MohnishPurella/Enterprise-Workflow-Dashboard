import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTaskStatus]',
  standalone: true
})
export class TaskStatusDirective {

  @Input('appTaskStatus') status!: string;

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit() {
    let color = '';

    switch (this.status.toLowerCase()) {
      case 'completed':
        color = '#59bd7a';
        break;
      case 'pending':
        color = '#ffad33';
        break;
      case 'in progress':
        color = '#3385ff';
        break;
      default:
        color = 'black';
    }

    this.el.nativeElement.style.color = color;
    this.el.nativeElement.style.fontWeight = 'bold';
  }

}
