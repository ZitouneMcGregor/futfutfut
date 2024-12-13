import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CardsService {
  private apiUrl = 'http://localhost:8080/joueurs';  // L'URL de votre API

  constructor(private http: HttpClient) { }

  // Récupère tous les joueurs
  async getPlayers(): Promise<any> {
    return this.http.get(this.apiUrl).toPromise();
  }

  // Ajoute un nouveau joueur
  async addPlayer(player: any): Promise<any> {
    return this.http.post(this.apiUrl, player).toPromise();
  }
}
