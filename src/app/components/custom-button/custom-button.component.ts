import { Component, ElementRef, EventEmitter, Output, ViewChild, input } from '@angular/core';
import { CommonModule } from '@angular/common';

type ButtonType = 'button' | 'submit' | 'reset';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.css'
})
export class CustomButtonComponent {
  @ViewChild('button') buttonRef!: ElementRef<HTMLButtonElement>;

  // Propriedades de input
  type = input<ButtonType>('button');
  disabled = input<boolean>(false);

  // Eventos
  @Output() buttonClick = new EventEmitter<MouseEvent>();

  onClick(event: MouseEvent): void {
    if (!this.disabled()) {
      this.buttonClick.emit(event);
    }
  }

  // Método para acionar programaticamente o clique no botão
  click(): void {
    this.buttonRef.nativeElement.click();
  }

  // Método para acionar programaticamente o foco no botão
  focus(): void {
    this.buttonRef.nativeElement.focus();
  }
}
