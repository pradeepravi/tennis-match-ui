import { Component, OnInit } from '@angular/core';
import { MatchService } from '../MatchService';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ScorerService } from '../ScorerService';

@Component({
  selector: 'app-match-add',
  templateUrl: './match-add.component.html',
  styleUrls: ['./match-add.component.scss']
})
export class MatchAddComponent implements OnInit {

  errors;
  match;
  setScore;
  message;

  angForm: FormGroup;
  constructor( private fb: FormBuilder, private matchService : MatchService, 
    private scorerService: ScorerService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      player1: ['', Validators.required ],
      player2: ['', Validators.required ]
    });
  }

  ngOnInit() { }

  addMatch(player1, player2) {
    this.errors=null;

    this.matchService.addMatch(player1, player2)
      .subscribe(
        res => {
          this.match = res;
        }, 
        error => {
          this.errors = error;
        }
      );
  }

  addScore(player) {
    this.errors = null;
    this.scorerService.addScore(this.match.id, player)
      .subscribe(res => {
        this.setScore = res;
        this.scorerService.getScoreBoard(this.match.id)
          .subscribe(res => {
            this.message= res; 
            // console.log(res);
          }, 
          error => {
            this.errors = error;
            console.log('ERROR', error);
          });
      }, 
      error => {
        this.errors = error;
        console.log('ERROR', error);
      }
      );
  }
}