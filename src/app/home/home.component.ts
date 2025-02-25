import { Component } from '@angular/core';
import { LucideAngularModule, Radio } from 'lucide-angular';
import { SubscriptionFormComponent } from './components/subscription-form/subscription-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LucideAngularModule, SubscriptionFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  readonly Radio = Radio;
}
