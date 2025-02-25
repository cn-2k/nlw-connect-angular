import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { twMerge } from 'tailwind-merge'

@Component({
  selector: 'app-icon-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-button.component.html',
  styleUrl: './icon-button.component.css'
})

export class IconButtonComponent {
  @Input() class = '';

  get mergedClasses(): string {
    const baseClasses = 'p-1.5 bg-gray-500 text-blue rounded-md cursor-pointer transition-colors duration-300 hover:bg-blue hover:text-gray-900';
    return twMerge(baseClasses, this.class);
  }
}
