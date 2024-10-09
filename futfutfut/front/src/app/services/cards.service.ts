import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private apiUrl = 'http://localhost:8080/joueurs';  // L'URL de votre API

  constructor(private http: HttpClient) { }

  // Renvoie une promesse avec les joueurs
  async getPlayers(): Promise<any> {
    return this.http.get(this.apiUrl).toPromise();
  }
}
