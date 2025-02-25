import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-root',
  standalone: true,
  imports: [],
  templateUrl: './input-root.component.html',
  styleUrl: './input-root.component.css'
})

export class InputRootComponent {
  @Input() error: boolean = false;
}
