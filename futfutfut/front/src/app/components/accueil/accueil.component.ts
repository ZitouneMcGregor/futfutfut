import { Component, HostListener, OnInit } from '@angular/core';
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

  players: any[] = [];  // Liste des joueurs affichés
  private allPlayers: any[] = [];  // Liste complète des joueurs
  private itemsPerPage: number = 20;  // Nombre de joueurs à afficher par "page"
  
  constructor(private cardsService: CardsService) { }

  async ngOnInit() {
    try {
      const data = await this.cardsService.getPlayers();  // Charge tous les joueurs
      this.allPlayers = data;  // Stocke les joueurs récupérés
      this.loadMorePlayers();  // Charge les premiers joueurs visibles
    } catch (error) {
      console.error('Erreur lors de la récupération des joueurs', error);
    }
  }

  // Charge plus de joueurs dans la liste visible
  loadMorePlayers(): void {
    const nextPlayers = this.allPlayers.splice(0, this.itemsPerPage);  // Récupère le prochain lot
    this.players = [...this.players, ...nextPlayers];  // Ajoute au tableau visible
  }

  // Détecte le défilement pour charger plus de joueurs
  @HostListener('window:scroll', [])
  onScroll(): void {
    const threshold = 300; // Déclenchement 300px avant d'atteindre le bas
    const position = window.innerHeight + window.scrollY;
    const height = document.body.offsetHeight;

    if (height - position <= threshold) {
      this.loadMorePlayers();  // Charge plus de joueurs
    }
  }
}
