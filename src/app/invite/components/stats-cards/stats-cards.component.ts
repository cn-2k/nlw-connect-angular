import { Component, Input, OnInit, signal } from '@angular/core';
import {
  getSubscriberInviteClicks,
  getSubscriberInviteCount,
  getSubscriberRankingPosition,
} from '../../../../../http/api'
import { LucideAngularModule, MousePointerClick, Medal, BadgeCheck } from 'lucide-angular';

@Component({
  selector: 'app-stats-cards',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './stats-cards.component.html',
  styleUrl: './stats-cards.component.css'
})

export class StatsCardsComponent implements OnInit {
  readonly MousePointerClick = MousePointerClick
  readonly Medal = Medal
  readonly BadgeCheck = BadgeCheck

  @Input() subscriberId: string = '';

  // Signals para armazenar os dados
  accessCount = signal<number>(0);
  inviteCount = signal<number>(0);
  rankingPosition = signal<number | null>(null);

  ngOnInit() {
    this.loadSubscriberData();
  }

  private async loadSubscriberData() {
    try {
      const { count: accessCount } = await getSubscriberInviteClicks(this.subscriberId)
      const { count: inviteCount } = await getSubscriberInviteCount(this.subscriberId)
      const { position: rankingPosition }
        = await getSubscriberRankingPosition(this.subscriberId)

      this.accessCount.set(accessCount);
      this.inviteCount.set(inviteCount);
      this.rankingPosition.set(rankingPosition);
    } catch (error) {
      console.error('Error loading subscriber data:', error);
    }
  }
}
