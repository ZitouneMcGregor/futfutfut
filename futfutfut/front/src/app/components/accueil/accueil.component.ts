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
      short_name: 'O. Benzeroual',
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
    },
    {
      short_name: 'M. De Ponton D\'Amecourt',
      club_position: 'ST',
      club_logo_url: 'https://cdn.sofifa.net/teams/73/60.png',
      club_flag_url: 'https://cdn.sofifa.net/flags/it.png',
      player_face_url: 'https://media.licdn.com/dms/image/v2/D4E35AQE-n_ZKRmybVw/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1677525122802?e=1729008000&v=beta&t=WfbJyMBuxsvA0lGKr5pIC_-fY5kMXrab0_Eau4zHIPU',
      pace: this.getRandomStat(30, 99),
      shooting: this.getRandomStat(30, 99),
      passing: this.getRandomStat(30, 99),
      dribbling: this.getRandomStat(30, 99),
      defending: this.getRandomStat(30, 99),
      physic: this.getRandomStat(30, 99)
    },
    {
      short_name: 'D. Szwarcbart',
      club_position: 'RW',
      club_logo_url: 'https://cdn.sofifa.net/teams/73/60.png',
      club_flag_url: 'https://cdn.sofifa.net/flags/ro.png',
      player_face_url: 'https://media.licdn.com/dms/image/v2/D4E03AQEZFfFFD0YZEg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1722242752982?e=1733961600&v=beta&t=MFFElfV_ne9-TNZ8ofWNFzDWNUiFEZssH48QqHU2aOg',
      pace: this.getRandomStat(30, 99),
      shooting: this.getRandomStat(30, 99),
      passing: this.getRandomStat(30, 99),
      dribbling: this.getRandomStat(30, 99),
      defending: this.getRandomStat(30, 99),
      physic: this.getRandomStat(30, 99)
    },
    {
      short_name: 'J. Dumora',
      club_position: 'RW',
      club_logo_url: 'https://cdn.sofifa.net/teams/73/60.png',
      club_flag_url: 'https://cdn.sofifa.net/flags/fr.png',
      player_face_url: 'https://media.licdn.com/dms/image/v2/D4D03AQG-uMBrDX9hzw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1688023768077?e=1733961600&v=beta&t=Ut0u_m5TAtHaUFpKD_dFyJwTSpSAJGLni-KO-8q6Vak',
      pace: this.getRandomStat(30, 99),
      shooting: this.getRandomStat(30, 99),
      passing: this.getRandomStat(30, 99),
      dribbling: this.getRandomStat(30, 99),
      defending: this.getRandomStat(30, 99),
      physic: this.getRandomStat(30, 99)
    },
    {
      short_name: 'S. Loos',
      club_position: 'RW',
      club_logo_url: 'https://cdn.sofifa.net/teams/73/60.png',
      club_flag_url: 'https://cdn.sofifa.net/flags/ru.png',
      player_face_url: 'https://media.licdn.com/dms/image/v2/D4D03AQFsUXPavh5kXw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1702544320788?e=1733961600&v=beta&t=aJ6DpcyczQ06l6lEcEiAObW6BeZSyf1iNmJ04Y9hhw8',
      pace: this.getRandomStat(30, 99),
      shooting: this.getRandomStat(30, 99),
      passing: this.getRandomStat(30, 99),
      dribbling: this.getRandomStat(30, 99),
      defending: this.getRandomStat(30, 99),
      physic: this.getRandomStat(30, 99)
    },
    {
      short_name: 'A. Bernard',
      club_position: 'ST',
      club_logo_url: 'https://cdn.sofifa.net/teams/73/60.png',
      club_flag_url: 'https://cdn.sofifa.net/flags/it.png',
      player_face_url: 'https://media.licdn.com/dms/image/v2/D4E03AQGsGB4x8u8vgw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1677678396248?e=1733961600&v=beta&t=xCEmu-fXuNTiJV4e-hXKlJ3KN05xw9YMAX-TWIQM4mg',
      pace: this.getRandomStat(30, 99),
      shooting: this.getRandomStat(30, 99),
      passing: this.getRandomStat(30, 99),
      dribbling: this.getRandomStat(30, 99),
      defending: this.getRandomStat(30, 99),
      physic: this.getRandomStat(30, 99)
    },
    {
      short_name: 'J. Papini',
      club_position: 'RW',
      club_logo_url: 'https://cdn.sofifa.net/teams/73/60.png',
      club_flag_url: 'https://cdn.sofifa.net/flags/ro.png',
      player_face_url: 'https://media.licdn.com/dms/image/v2/D4E35AQFZfN5rolPgBQ/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1702379416786?e=1729008000&v=beta&t=tNaDT2ZdDpe2AoBIvJLcIoa8Is6vZmtEHesaqMOhkpE',
      pace: this.getRandomStat(30, 99),
      shooting: this.getRandomStat(30, 99),
      passing: this.getRandomStat(30, 99),
      dribbling: this.getRandomStat(30, 99),
      defending: this.getRandomStat(30, 99),
      physic: this.getRandomStat(30, 99)
    },
    {
      short_name: 'T. Millot',
      club_position: 'RW',
      club_logo_url: 'https://cdn.sofifa.net/teams/73/60.png',
      club_flag_url: 'https://cdn.sofifa.net/flags/fr.png',
      player_face_url: 'https://media.licdn.com/dms/image/v2/D4E35AQEC8WRvp5Hr1g/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1682004867615?e=1729008000&v=beta&t=lJPHh9ggYCj8O2POqXNxdnTOA8T7mOWCmlqwQttcjuU',
      pace: this.getRandomStat(30, 99),
      shooting: this.getRandomStat(30, 99),
      passing: this.getRandomStat(30, 99),
      dribbling: this.getRandomStat(30, 99),
      defending: this.getRandomStat(30, 99),
      physic: this.getRandomStat(30, 99)
    },
    {
      short_name: 'L. Ricarde',
      club_position: 'RW',
      club_logo_url: 'https://cdn.sofifa.net/teams/73/60.png',
      club_flag_url: 'https://cdn.sofifa.net/flags/ru.png',
      player_face_url: 'https://media.licdn.com/dms/image/v2/D4E03AQG0bw5YXIHBOA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1678094803322?e=1733961600&v=beta&t=v3Ai2jyql1FCPrtP4pwI0RxbCC2TxDM5Rv42sIuVOlw',
      pace: this.getRandomStat(30, 99),
      shooting: this.getRandomStat(30, 99),
      passing: this.getRandomStat(30, 99),
      dribbling: this.getRandomStat(30, 99),
      defending: this.getRandomStat(30, 99),
      physic: this.getRandomStat(30, 99)
    },{
      short_name: 'A. Heras Espinosa',
      club_position: 'ST',
      club_logo_url: 'https://cdn.sofifa.net/teams/73/60.png',
      club_flag_url: 'https://cdn.sofifa.net/flags/it.png',
      player_face_url: 'https://media.licdn.com/dms/image/v2/D4E03AQHDR8PrgaZ1hw/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1694766530774?e=1733961600&v=beta&t=F23uPUUSA5t_7Qeqkhx_22tX9X4UdEpm3BIaqEE087o',
      pace: this.getRandomStat(30, 99),
      shooting: this.getRandomStat(30, 99),
      passing: this.getRandomStat(30, 99),
      dribbling: this.getRandomStat(30, 99),
      defending: this.getRandomStat(30, 99),
      physic: this.getRandomStat(30, 99)
    },
    {
      short_name: 'T. Gabagnou',
      club_position: 'RW',
      club_logo_url: 'https://cdn.sofifa.net/teams/73/60.png',
      club_flag_url: 'https://cdn.sofifa.net/flags/ro.png',
      player_face_url: 'https://lh3.googleusercontent.com/proxy/yCdIZW6mgPFmdEhZFpwtuJUBZ026Zp9wgGg7GNEy1DTfF7ydV3YpElaaRY_bjcekCfZ5v0vPtzf6O2ofkMRpn22T8dFmYSN5Mir4acgbs1vv6SzJCDM',
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
