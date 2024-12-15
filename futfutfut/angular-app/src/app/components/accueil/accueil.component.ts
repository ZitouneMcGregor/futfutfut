import { Component, HostListener, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CommonModule } from '@angular/common';
import { CardsService } from '../../services/cards.service';  // Importation du service
import { FormsModule } from '@angular/forms';
import { AddPlayerComponent } from '../add-player/add-player.component';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CardComponent, CommonModule,FormsModule, AddPlayerComponent],
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
  newPlayer: any = {
    shortName: '',
    longName: '',
    overall: 0,
    clubName: '',
    leagueName: '',
    clubPosition: '',
    clubJerseyNumber: null,
    nationalityName: '',
    pace: 0,
    shooting: 0,
    passing: 0,
    dribbling: 0,
    defending: 0,
    physic: 0,
    goalkeepingDiving: null,
    goalkeepingHandling: null,
    goalkeepingKicking: null,
    goalkeepingPositioning: null,
    goalkeepingReflexes: null,
    goalkeepingSpeed: null,
    playerFaceUrl: '',
    clubLogoUrl: '',
    clubFlagUrl: '',
    nationLogoUrl: '',
    nationFlagUrl: ''
  };

  message: string = '';

  validatePlayer(): boolean {
    if (!this.newPlayer.shortName || !this.newPlayer.clubPosition) {
      this.message = 'Les champs Nom court et Position de club sont obligatoires.';
      return false;
    }
    return true;
  }

  async addPlayer() {
    if (!this.validatePlayer()) {
      return;
    }

    try {
      const response = await this.cardsService.addPlayer(this.newPlayer);
      this.message = 'Joueur ajouté avec succès !';
      this.resetForm();
    } catch (error) {
      console.error('Erreur lors de l\'ajout du joueur', error);
      this.message = 'Erreur lors de l\'ajout du joueur.';
    }
  }

  resetForm() {
    this.newPlayer = {
      shortName: '',
      longName: '',
      overall: 0,
      clubName: '',
      leagueName: '',
      clubPosition: '',
      clubJerseyNumber: null,
      nationalityName: '',
      pace: 0,
      shooting: 0,
      passing: 0,
      dribbling: 0,
      defending: 0,
      physic: 0,
      goalkeepingDiving: null,
      goalkeepingHandling: null,
      goalkeepingKicking: null,
      goalkeepingPositioning: null,
      goalkeepingReflexes: null,
      goalkeepingSpeed: null,
      playerFaceUrl: '',
      clubLogoUrl: '',
      clubFlagUrl: '',
      nationLogoUrl: '',
      nationFlagUrl: ''
    };
  }
}
