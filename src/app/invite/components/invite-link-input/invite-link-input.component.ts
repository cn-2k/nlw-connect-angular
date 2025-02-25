import { FormsModule } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Link, Copy, Check } from 'lucide-angular';

import { InputRootComponent } from '../../../components/input/input-root/input-root.component';
import { InputIconComponent } from '../../../components/input/input-icon/input-icon.component';
import { InputFieldComponent } from '../../../components/input/input-field/input-field.component';
import { IconButtonComponent } from '../../../components/icon-button/icon-button.component';

@Component({
  selector: 'app-invite-link-input',
  standalone: true,
  imports: [FormsModule, CommonModule, InputRootComponent, InputIconComponent, InputFieldComponent, IconButtonComponent, LucideAngularModule],
  templateUrl: './invite-link-input.component.html',
  styleUrl: './invite-link-input.component.css'
})

export class InviteLinkInputComponent {
  readonly Link = Link
  readonly Copy = Copy
  readonly Check = Check

  // Propriedade recebida via prop
  @Input() inviteLink: string = '';

  copied = false

  copyToClipboard() {
    navigator.clipboard.writeText(this.inviteLink)
    this.copied = true

    setTimeout(() => {
      this.copied = false
    }, 4000)
  }
}
