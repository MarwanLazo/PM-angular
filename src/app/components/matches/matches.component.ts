import { Component, OnInit } from '@angular/core';
import { ParticipantModel } from 'src/app/models/ParticipantModel';
import { RoundModel } from 'src/app/models/RoundModel';
import { RoundService } from 'src/app/services/lookups/round/round.service';
import { ParticipantService } from 'src/app/services/participants/participant.service';
import { MatchModel } from 'src/app/models/MatchModel';
import { MatchService } from 'src/app/services/match/match.service';
import { ColumnNames } from 'src/app/models/ColumnNames';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {

  roundModels: RoundModel[] = []
  participantModels: ParticipantModel[] = []
  matchModels: MatchModel[] = []


  columnNames: ColumnNames[] = [
    { columHead: 'First Participant', property: 'partOne' },
    { columHead: 'Second Participant', property: 'partTwo' },
    { columHead: 'Match Roud', property: 'round' },
    { columHead: 'Match Desc.', property: 'desc' },
    { columHead: 'Match Date', property: 'matchDate' }
  ];

  selectedRow: MatchModel;
  model: MatchModel;
  mod: string = 'CREATE';

  constructor(private roundService: RoundService, private partService: ParticipantService
    , private matchService: MatchService) { }

  ngOnInit(): void {
    this.roundService.getRounds().subscribe(data => this.roundModels = data);
    // this.partService.getParticipant().subscribe(data => this.participantModels = data);
    this.matchService.getMatch().subscribe(data => this.matchModels = data);
    this.model = new MatchModel();
  }

  compareFn(a: any, b: any) {
    return a && b && a.id == b.id;
  }


  saveMatch($event) {
    switch (this.mod) {
      case "CREATE":
        this.matchService.create(this.model).subscribe(data => this.ngOnInit());
        break;
      case "CREATE":
      default:
        this.matchService.update(this.model, this.model.id).subscribe(data => this.ngOnInit());
        break;
    }
  }

  cancel($event) {
    this.model = new MatchModel();
  }

  createRoundMatches(f: NgForm) {
    if (f.valid && this.model.round.id) {
      this.matchService.createRoundMatches(this.model.round.id).subscribe(data => {
        this.ngOnInit()
        f.resetForm()
      });
    }
  }

  getRow(row: MatchModel) {
    this.selectedRow = row;
    this.mod = 'UPDATE';
    this.model = { ...row }
    // this.model.matchDate = new Date().toLocaleDateString()
    console.log(this.model)
  }

}
