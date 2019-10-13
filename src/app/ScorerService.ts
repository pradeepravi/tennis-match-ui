import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ScorerService {
  uri = 'http://localhost:8080/api/v1';
  // uri = 'http://localhost:8080/api/v1';
  constructor(private http: HttpClient) { }
  addScore(matchId, player) {
    const obj = {
      playerName: player
    };
    return this.http.post(`${this.uri}/sports/tennis/scores/${matchId}`, obj);
  }

  getScoreBoard(matchId) {
    return this.http.get(`${this.uri}/sports/tennis/scores/${matchId}`);
  }
}