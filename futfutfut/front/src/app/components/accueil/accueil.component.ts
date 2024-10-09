import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { CardsService } from '../../services/cards.service';  // Importation du service

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})

export class AccueilComponent implements OnInit {

  players: any[] = [];

  constructor(private cardsService: CardsService) { }

  // Récupérer les joueurs au chargement du composant
  async ngOnInit() {
    try {
      const data = await this.cardsService.getPlayers();
      this.players = data;  
    } catch (error) {
      console.error('Erreur lors de la récupération des joueurs', error);
    }
    
  }
}

