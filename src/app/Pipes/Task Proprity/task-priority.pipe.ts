import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskPriority',
  standalone: true
})
export class TaskPriorityPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value;

    switch (value.toLowerCase()) {
      case 'high':
        return '🔴 High';
      case 'medium':
        return '🟠 Medium';
      case 'low':
        return '🟢 Low';
      default:
        return value; // Fallback
    }
  }

}
