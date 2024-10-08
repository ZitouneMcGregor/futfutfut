import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {
  players = [
    {
      short_name: 'O.Benzeroual',
      club_position: 'ST',
      club_logo_url: 'https://cdn.sofifa.net/teams/73/60.png',
      club_flag_url: 'https://cdn.sofifa.net/flags/it.png',
      player_face_url: 'https://media.licdn.com/dms/image/v2/D4E03AQFYS6ejT-G0og/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1669554107446?e=1733961600&v=beta&t=2TV_cMSH4XwgmY_fInDs4JSDYZ7ZDuZ1k0AImS4FNns',
      pace: this.getRandomStat(30, 99),
      shooting: this.getRandomStat(30, 99),
      passing: this.getRandomStat(30, 99),
      dribbling: this.getRandomStat(30, 99),
      defending: this.getRandomStat(30, 99),
      physic: this.getRandomStat(30, 99)
    },
    {
      short_name: 'J. Lioger--Bun',
      club_position: 'RW',
      club_logo_url: 'https://cdn.sofifa.net/teams/73/60.png',
      club_flag_url: 'https://cdn.sofifa.net/flags/ro.png',
      player_face_url: 'https://media.licdn.com/dms/image/v2/D4E03AQE5DosK7Es6gA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1671209736094?e=1733961600&v=beta&t=8my1K5QYt2S7uCwCoUXKpi5sVoEN9XxRPgVcfH4w4n0',
      pace: this.getRandomStat(30, 99),
      shooting: this.getRandomStat(30, 99),
      passing: this.getRandomStat(30, 99),
      dribbling: this.getRandomStat(30, 99),
      defending: this.getRandomStat(30, 99),
      physic: this.getRandomStat(30, 99)
    },
    {
      short_name: 'C. Mounic',
      club_position: 'RW',
      club_logo_url: 'https://cdn.sofifa.net/teams/73/60.png',
      club_flag_url: 'https://cdn.sofifa.net/flags/fr.png',
      player_face_url: 'https://media.licdn.com/dms/image/v2/D4E03AQGVYpKuu3tgyw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1708893515270?e=1733961600&v=beta&t=RPADBFTFm7te3-G6w4f5NJF0CFo4M5_2zkvb28CbtXk',
      pace: this.getRandomStat(30, 99),
      shooting: this.getRandomStat(30, 99),
      passing: this.getRandomStat(30, 99),
      dribbling: this.getRandomStat(30, 99),
      defending: this.getRandomStat(30, 99),
      physic: this.getRandomStat(30, 99)
    },
    {
      short_name: 'O. Carrere-Gee',
      club_position: 'RW',
      club_logo_url: 'https://cdn.sofifa.net/teams/73/60.png',
      club_flag_url: 'https://cdn.sofifa.net/flags/ru.png',
      player_face_url: 'https://media.licdn.com/dms/image/v2/D4D03AQHLlRVKLpgtQQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1718375806960?e=1733961600&v=beta&t=xK6U87CQKnb95M4lvLA7OkkU0jbpgEk4v5DV84JFBg0',
      pace: this.getRandomStat(30, 99),
      shooting: this.getRandomStat(30, 99),
      passing: this.getRandomStat(30, 99),
      dribbling: this.getRandomStat(30, 99),
      defending: this.getRandomStat(30, 99),
      physic: this.getRandomStat(30, 99)
    }
  ].map(player => ({
      ...player,
      overall: this.calculateOverall(player)  // Calculer la note globale
    }));

  // Méthode pour obtenir un nombre aléatoire dans une plage
  getRandomStat(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Méthode pour calculer la note globale
  calculateOverall(player: any): number {
    const totalStats = player.pace + player.shooting + player.passing + player.dribbling + player.defending + player.physic;
    return Math.floor(totalStats / 6);  // Moyenne des 6 statistiques
  }
}
