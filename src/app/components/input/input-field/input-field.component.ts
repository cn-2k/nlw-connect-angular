import { CommonModule } from '@angular/common';
import { Component, forwardRef, input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

export type InputType = 'text' | 'password' | 'number' | 'tel' | 'email'

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFieldComponent),
      multi: true
    }
  ],
})

export class InputFieldComponent implements ControlValueAccessor {
  type = input<InputType>('text');
  placeholder = input<string>('');
  maxLength = input<number | undefined>(undefined);
  minLength = input<number | undefined>(undefined);
  disabled = input<boolean>(false);
  readonly = input<boolean>(false);

  value: string = '';
  onChange: any = () => { };
  onTouched: any = () => { };
  isDisabled: boolean = false;

  writeValue(value: string): void {
    this.value = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value;

    if (this.type() === 'number') {
      value = value.replace(/[^0-9]/g, '');
      if (this.maxLength()) {
        value = value.slice(0, this.maxLength());
        input.value = value;
      }
    }

    this.value = value;
    this.onChange(value);
    this.onTouched();
  }
}
