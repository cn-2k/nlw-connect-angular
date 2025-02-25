// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
  // Rotas com layout padrão (não autenticado)
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./home/home.component')
          .then(m => m.HomeComponent)
      },
      {
        path: 'invite/:subscriberId',
        loadComponent: () => import('./invite/invite.component')
          .then(m => m.InviteComponent)
      },
    ]
  },
];
