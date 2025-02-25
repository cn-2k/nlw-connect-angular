import { Component, signal } from '@angular/core';
import { getRanking } from '../../../../../http/api'
import { CommonModule } from '@angular/common';

interface RankingProps {
  id: string;
  name: string;
  score: number;
}

@Component({
  selector: 'app-invite-ranking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invite-ranking.component.html',
  styleUrl: './invite-ranking.component.css',
})

export class InviteRankingComponent {
  ranking = signal<RankingProps[]>([]);

  ngOnInit() {
    this.loadRanking();
  }

  private async loadRanking() {
    try {
      const { ranking } = await getRanking()

      this.ranking.set(ranking);

    } catch (error) {
      console.error('Error loading ranking:', error);
    }
  }
}
