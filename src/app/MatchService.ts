import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MatchService {
  uri = 'http://localhost:8080/api/v1';
  constructor(private http: HttpClient) { }
  addMatch(player1, player2) {
    const obj = {
      player1: player1, 
      player2: player2
    };
    return this.http.post(`${this.uri}/sports/tennis/matches`, obj);
  }
}