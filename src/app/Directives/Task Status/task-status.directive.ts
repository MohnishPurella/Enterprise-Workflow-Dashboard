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
        color = 'green';
        break;
      case 'pending':
        color = 'orange';
        break;
      case 'in progress':
        color = 'blue';
        break;
      default:
        color = 'black';
    }

    this.el.nativeElement.style.color = color;
    this.el.nativeElement.style.fontWeight = 'bold';
  }

}
