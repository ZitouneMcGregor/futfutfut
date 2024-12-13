import { Component, Input, OnInit } from '@angular/core';
import { CommonModule, NgStyle } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, NgStyle],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})

export class CardComponent implements OnInit {
  @Input() short_name!: string;
  @Input() club_position!: string;
  @Input() club_logo_url!: string;
  @Input() club_flag_url!: string;
  @Input() player_face_url!: string;
  @Input() overall!: number;
  @Input() pace!: number;
  @Input() shooting!: number;
  @Input() passing!: number;
  @Input() dribbling!: number;
  @Input() defending!: number;
  @Input() physic!: number;

  ngOnInit() {
    console.log('Pace:', this.pace);
    console.log('Shooting:', this.shooting);
    console.log('Passing:', this.passing);
    console.log('Dribbling:', this.dribbling);
    console.log('Defending:', this.defending);
    console.log('Physic:', this.physic);
  }

  // Méthode pour calculer la couleur RGB en fonction des stats
  getCardColor(): string {
    const normalize = (value: number) => Math.min(255, Math.max(0, (value / 100) * 255));

    const red = Math.round((normalize(this.pace) + normalize(this.shooting)) / 2);
    const green = Math.round((normalize(this.defending) + normalize(this.physic)) / 2);
    const blue = Math.round((normalize(this.passing) + normalize(this.dribbling)) / 2);

    console.log(`RGB - R: ${red}, G: ${green}, B: ${blue}`);  // Ajout de logs pour les couleurs

    return `rgb(${red}, ${green}, ${blue})`;
  }
}