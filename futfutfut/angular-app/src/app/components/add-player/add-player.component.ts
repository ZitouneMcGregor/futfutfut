import { Component } from '@angular/core';
import { CardsService } from '../../services/cards.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-player',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-player.component.html',
  styleUrl: './add-player.component.scss'
})
export class AddPlayerComponent {
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

  constructor(private cardsService: CardsService) {}

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