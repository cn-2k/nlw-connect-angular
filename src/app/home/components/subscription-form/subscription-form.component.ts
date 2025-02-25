import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InputRootComponent } from '../../../components/input/input-root/input-root.component';
import { InputIconComponent } from '../../../components/input/input-icon/input-icon.component';
import { InputFieldComponent } from '../../../components/input/input-field/input-field.component';
import { CustomButtonComponent } from '../../../components/custom-button/custom-button.component';
import { LucideAngularModule, User, Mail, ArrowRight } from 'lucide-angular';
import { subscribeToEvent } from '../../../../../http/api';

@Component({
  selector: 'app-subscription-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputFieldComponent,
    InputRootComponent,
    InputIconComponent,
    CustomButtonComponent,
    LucideAngularModule
  ],
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css'],
})

export class SubscriptionFormComponent {
  readonly User = User;
  readonly Mail = Mail;
  readonly ArrowRight = ArrowRight;

  subscriptionForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(private route: ActivatedRoute, private router: Router) { }

  onSubmit(): void {
    if (this.subscriptionForm.invalid) {
      // Marca todos os controles como touched para exibir os erros
      Object.keys(this.subscriptionForm.controls).forEach(key =>
        this.subscriptionForm.get(key)?.markAsTouched()
      );
      return;
    }

    // Recupera o parâmetro "referrer" da query string
    const referrer = this.route.snapshot.queryParamMap.get('referrer');
    // Extrai os valores do formulário
    const name = this.subscriptionForm.get('name')?.value!;
    const email = this.subscriptionForm.get('email')?.value!;

    // Chama a função subscribeToEvent (supondo que retorne uma Promise)
    subscribeToEvent({ name, email, referrer })
      .then(response => {
        const subscriberId = response.subscriberId;
        // Redireciona para a rota desejada
        this.router.navigate(['/invite', subscriberId]);
      })
      .catch(error => {
        console.error('Erro ao processar inscrição:', error);
      });
  }
}
