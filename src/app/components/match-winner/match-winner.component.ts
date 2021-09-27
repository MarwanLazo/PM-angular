import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ColumnNames } from 'src/app/models/ColumnNames';
import { MatchModel } from 'src/app/models/MatchModel';
import { MatchService } from 'src/app/services/match/match.service';

@Component({
  selector: 'app-match-winner',
  templateUrl: './match-winner.component.html',
  styleUrls: ['./match-winner.component.scss']
})
export class MatchWinnerComponent implements OnInit {

  matchModels_played: MatchModel[] = [];
  matchModels_not_played: MatchModel[] = [];
  model: MatchModel;
  winnerId: number;

  columnNames: ColumnNames[] = [
    { columHead: 'First Participant', property: 'partOne' },
    { columHead: 'Second Participant', property: 'partTwo' },
    { columHead: 'Match Roud', property: 'round' },
    { columHead: 'Match Date', property: 'matchDate' },
    { columHead: 'Match Winner', property: 'winner' },
    { columHead: 'Match Status', property: 'played' }
  ];

  constructor(private matchService: MatchService) { }


  ngOnInit(): void {
    this.matchService.getMatch().subscribe(data => {
      this.matchModels_played = data.filter(match => match.played);
      this.matchModels_not_played = data.filter(match => !match.played);
    });

  }

  compareFn(a: MatchModel, b: MatchModel) {
    return a && b && a.id == b.id;
  }

  matchChange(id: number) { this.setWinner(id); }

  setWinner(winnerId: number) { this.winnerId = winnerId; console.log(this.winnerId); }

  setMatchWinner(f: NgForm) {
    if (f.valid)
      this.matchService.setMatchWinner(+this.model.id, +this.winnerId).subscribe(data => {
        this.ngOnInit();
        alert(`Winner is :: ${data}`)
      });
  }
}
