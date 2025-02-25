import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InviteLinkInputComponent } from './components/invite-link-input/invite-link-input.component';
import { StatsCardsComponent } from "./components/stats-cards/stats-cards.component";
import { InviteRankingComponent } from "./components/invite-ranking/invite-ranking.component";

@Component({
  selector: 'app-invite',
  standalone: true,
  imports: [InviteLinkInputComponent, StatsCardsComponent, InviteRankingComponent],
  templateUrl: './invite.component.html',
  styleUrl: './invite.component.css',
})

export class InviteComponent implements OnInit {
  subscriberId: string | null = null;
  inviteLink: string = ''

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Obtém o parâmetro 'subscriberId' da rota
    this.subscriberId = this.route.snapshot.paramMap.get('subscriberId');
    this.inviteLink = `http://localhost:3333/invites/${this.subscriberId}`
  }
}
